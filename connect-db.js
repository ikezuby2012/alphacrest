const mongoose = require("mongoose");


// console.log(process.env.NODE_ENV, process.env.DATABASE_LOCAL);

if (process.env.NODE_ENV === "development") {
   mongoose
      .connect(process.env.DATABASE_LOCAL, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
      .then(() => {
         console.log(`local database connected successfully`);
      });
} else {
   mongoose
      .connect(process.env.DATABASE_ATLAS, {
         useNewUrlParser: true
      })
      .then(() => {
         console.log(`database connected successfully`);
      });
}
