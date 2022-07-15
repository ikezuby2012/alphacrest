import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import ResButton from "./ResButton";
import { StrikethroughS, Call } from "react-icons/md";
import bgSrc from "../../public/utils/bg-video.mp4";
import logo from "../../public/vercel.svg";

//https://coverr.co/videos/a-trader-performing-financial-analysis-of-cryptocurrency-using-a-phone-app-and-laptop.-5JGfqvdxkD?utm_source=coverr&utm_medium=referral&utm_content=creditShareLink
//https://coverr.co/videos/browsing-the-activity-page-on-the-nft-marketplace-AGVFoY2s1E?utm_source=coverr&utm_medium=referral&utm_content=creditShareLink
const Header = () => {
   const [res, setIsRes] = useState(false);

   const toggleButton = (e) => setIsRes(!res);
   const closePanel = (e) => setIsRes(false);
   return (
      <header className="header">
         <div className="header-video">
            {/* Video by Coverr, https://coverr.co/videos/trip-through-the-city-OBK61W3JG4?utm_source=coverr&utm_medium=referral&utm_content=creditShareLink */}
            <video
               autoPlay
               className="header-video_content"
               muted
               loop
               // src={require("../../public/utils/bg-video.mp4")}
            >
               <source
                  src={require("../../public/utils/bg-video.mp4")}
                  type="video/mp4"
               />
            </video>
         </div>
         <div className="header-top">
            <fiqure className="header-logo">
               <Image src={logo} alt="header logo" height={72} width={72} />
            </fiqure>

            {/* responsive button */}
            {/* <div className="navigation">
               <input
                  type="checkbox"
                  className="navigation__checkbox"
                  id="navi-toggle"
                  onClick={(e) => toggleButton(e)}
               />
               <label htmlFor="navi-toggle" className="navigation__button">
                  <span className="navigation__icon">&nbsp;</span>
               </label>
            </div>
            {res && <ResButton onClose={closePanel} />} */}
            <nav className="header-nav">
               <ul className="header-nav-list">
                  <li className="header-nav-item">
                     <Link className="header-nav-link" href="/">
                        <a className="header-nav-link">home</a>
                     </Link>
                  </li>
                  <li className="header-nav-item">
                     <Link className="header-nav-link" href="/about">
                        <a className="header-nav-link">about</a>
                     </Link>
                  </li>
                  <li className="header-nav-item">
                     <Link className="header-nav-link" href="/plans">
                        <a className="header-nav-link">plans</a>
                     </Link>
                  </li>
                  <li className="header-nav-item">
                     <Link className="header-nav-link" href="/faq">
                        <a className="header-nav-link">faq</a>
                     </Link>
                  </li>
               </ul>
            </nav>

            <nav className="header-nav">
               <ul className="header-nav-list">
                  <li className="header-nav-item">
                     <a className="header-nav-link header-btn" href="#info">
                        log in
                     </a>
                  </li>
                  <li className="header-nav-item">
                     <a className="header-nav-link header-btn" href="#info">
                        sign up
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="header_text">
            <h1 className="header_text-h1">
               <span className={"header_text-primary"}>
                  <span>The Swiftest way to make money Digitally!</span>
                  <span>trade your digital asset</span>
                  <span>any difficulty</span>
               </span>
               <span className={"header_text-secondary"}>
                  let our proffessional trader do the work for you
                  <span>this has been the proven way that works</span>
               </span>
            </h1>
         </div>
      </header>
   );
};

export default Header;
