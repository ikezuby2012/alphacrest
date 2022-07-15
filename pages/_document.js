import Loader from "components/utils/loader";
// import loader-css from "components/utils/loader-css"
import Document, { Head, Html, Main, NextScript } from "next/document";
import loaderCss from "components/utils/loader-css";

class myDocument extends Document {
   constructor() {
      super();
   }

   render() {
      return (
         <Html lang="en">
            <Head />
               {/* <title>an official website for mr zuby</title> */}
               {/* <head>
                  <style>{loaderCss}</style>
               </head> */}
            {/* </Head> */}
            <body>
               {/* <div id="global-loader">
                  <Loader />
               </div> */}
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default myDocument;
