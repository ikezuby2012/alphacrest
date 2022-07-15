const next = require("next");
const express = require("express");
const rateLimit = require("express-rate-limit");
const { parse } = require("url");
require("dotenv").config({ path: "./config.env" });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const Server = next({ dev, hostname, port });
const handle = Server.getRequestHandler();

const viewRouter = require("./routes/viewRoutes");
const CoinMarketRouter = require("./routes/coinMarketRoutes");

Server.prepare()
   .then(() => {
      const app = express();

      const limiter = rateLimit({
         windowMs: 10 * 1000, // 15 minutes
         max: 100 // limit each IP to 100 requests per windowMs
      });

      app.use(limiter);
      app.set("trust proxy", 1);

      app.get("*", (req, res) => {
         //   res.status(200).json({ status: "success", text: "ok" });
         return handle(req, res);
      });

      app.use("/", viewRouter);
      app.use("/api/v1/coin", CoinMarketRouter)

      require("./connect-db");

      app.listen(port, (err) => {
         if (err) throw err;
         console.log(`> Ready on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.log("uncaught exception .. shuting down....");
      console.log(err.name, err.message);
      process.exit(1);
   });
