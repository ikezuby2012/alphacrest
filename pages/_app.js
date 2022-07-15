import { useState, useEffect } from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import "../styles/globals.css";
import "../styles/App.css";
import Loader from "../components/utils/loader";

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const [loading, setLoading] = useState(false);

   
   /** testing out something with useEffect */
   useEffect(() => {
      // if (typeof window !== "undefined") {
      //    const loader = document.getElementById("global-loader");

      //    if (loader) loader.style.display = "none";
      // }
      // const handleStart = (url) => (url !== router.asPath) && setLoading(true)
      // const handleComplete = (url) => (url === router.asPath) && setLoading(false)
      // router.events.on("routeChangeStart", (url) => {
      //    console.log(`loading ${url}`);
      //    handleStart();
      // });

      // router.events.on("routeChangeComplete", handleComplete);
      // router.events.on("routeChangeError", handleComplete);

      // return () => {
      //    router.events.off("routeChangeStart", (url) => {
      //       console.log(`loading ${url}`);
      //       setLoading(true);
      //    });

      //    router.events.off("routeChangeComplete", (url) => setLoading(false));
      //    router.events.off("routeChangeError", (url) => setLoading(false));
      // };
   }, [router]);

   return (
      <>
         <Head>
            <title>alphacrest</title>
            <meta
               name="description"
               content="The Swiftest way to make money Digitally! trade your digital asset"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {/* {console.log(loading)} */}
         {loading ? <Loader {...pageProps} /> : <Component {...pageProps} />}
         {/* <Component {...pageProps} /> */}
      </>
   );
}

export default MyApp;
