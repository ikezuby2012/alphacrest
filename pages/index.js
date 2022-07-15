import { Suspense, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import Loader from "../components/utils/loader";
import Header from "../components/landingPage/Header";
import Subscribers from "../components/landingPage/subscribers";
import About from "../components/landingPage/about";
import Info from "../components/landingPage/Info";
import Features from "../components/landingPage/features";
import Expert from "../components/landingPage/expert";
import Investors from "../components/landingPage/investor";
import CryptoPrice from "../components/landingPage/cryptoPrice";
import Plans from "components/landingPage/plans";
import Testimonial from "components/landingPage/testimonial";
import Faq from "components/landingPage/faq";
import Newsletter from "components/landingPage/newsletter";
import Payment from "components/landingPage/payment";

export default function Home() {
   const router = useRouter();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // if (typeof window !== "undefined") {
      //    const loader = document.getElementById("global-loader");

      //    if (loader) loader.style.display = "none";
      // }

      const timer = setTimeout(() => setLoading(false), 5000);

      return () => {
         if (loading === false) clearTimout(timer);
      };
   }, []);

   return (
      <>
         <Head>
            <title>alphacrest</title>
            <meta
               name="description"
               content="invest and trade your digital assets such as bitcoin, ethereum with us"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Suspense fallback={<Loader />}>
            {loading ? (
               <Loader />
            ) : (
               <div className="container">
                  <Header />
                  <Subscribers />
                  <About />
                  <Info />
                  <Features />
                  <Expert />
                  <Investors />
                  <CryptoPrice />
                  <Plans />
                  <Testimonial />
                  <Faq />
                  <Newsletter />
                  <Payment />
               </div>
            )}
         </Suspense>
      </>
   );
}
