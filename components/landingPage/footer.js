import Link from "next/link";

import {
   FaTwitter,
   FaWhatsapp,
   FaFacebook,
   FaLinkedin,
   FaInstagram
} from "react-icons/fa";

import { Mail, LocationOn } from "@material-ui/icons";
const Footer = () => {
   const year = new Date().getFullYear();
   return (
      <footer className="footer">
         <div className="footer-div">
            <div className="footer-desc_box">
               <h1
                  className="header-logo"
                  style={{ color: "white", fontSize: "17px" }}
               >
                  alphacrest
                  {/* <span>Saving</span> */}
               </h1>
               <p>
                  alphacrest.com is owned and operated by alphacrest group Ltd,
                  registered office at Arch. Makariou III & 1-7 Evagorou, MITSI
                  3, 1st floor, office 102 C, 1065 Nicosia, Cyprus (Company
                  number HE413263)
               </p>
            </div>
            <div className="footer-policy footer-box">
               <h3 className="footer-box-headtd">our services</h3>
               <nav className={"footer-nav"}>
                  <ul className={"footer-list"}>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>bitcoin investment</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a> business consulting</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>crypto exchange</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>bitcoin mining</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>escrow services</a>
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="footer-company footer-box">
               <h3 className="footer-box-headtd">company</h3>
               <nav className={"footer-nav"}>
                  <ul className={"footer-list"}>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#about"}>
                           <a>about us</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#plan"}>
                           <a>plan</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>terms and conditions</a>
                        </Link>
                     </li>
                     <li className="footer-item">
                        <Link className={"footer-link"} href={"#"}>
                           <a>faq</a>
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="footer-business footer-box">
               <h3 className="footer-box-headtd">contact detail</h3>
               <nav className={"footer-nav"}>
                  <ul className={"footer-list"}>
                     <li className="footer-item">
                        <Link
                           className={"footer-link"}
                           href={"#"}
                           style={{ display: "flex", alignItems: "center" }}
                        >
                           <a>
                              <span style={{ marginRight: "5px" }} className="">
                                 <Mail
                                    style={{ height: "20px", width: "20px" }}
                                    className="footer_icon footer_icon-wa"
                                 />
                              </span>
                              admin@{window.location.origin}
                           </a>
                        </Link>
                     </li>

                     <li className="footer-item">
                        <Link
                           className={"footer-link"}
                           to={"#"}
                           style={{ display: "flex", alignItems: "center" }}
                        >
                           <span style={{ marginRight: "5px" }}>
                              <LocationOn
                                 style={{ height: "20px", width: "20px" }}
                                 className="footer_icon footer_icon-twitter"
                              />
                           </span>
                           Arch. Makariou III & 1-7 Evagorou, MITSI 3, 1st
                           floor, office 102 C1065 – Nicosia, Cyprus
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="footer-subscribe">
               <h3 className="footer-subscribe-text">we are social</h3>
               <div className="footer_social-media">
                  <span className="footer_icon-box">
                     <a href="https://twitter.com/" target="blank">
                        <FaTwitter className="footer_icon footer_icon-twitter" />
                     </a>
                  </span>
                  <span className="footer_icon-box">
                     <a href="https://linkedin.com/in/" target="blank">
                        <FaLinkedin className="footer_icon footer_icon-ln" />
                     </a>
                  </span>
                  <span className="footer_icon-box">
                     <a href="https://wa.me/" target="blank">
                        <FaWhatsapp className="footer_icon footer_icon-wa" />
                     </a>
                  </span>
                  <span className="footer_icon-box">
                     <a href="https://instagram.com/" target="blank">
                        <FaInstagram className="footer_icon footer_icon-lnsta" />
                     </a>
                  </span>
                  <span className="footer_icon-box">
                     <a href="https://facebook/" target="blank">
                        <FaFacebook className="footer_icon footer_icon-fb" />
                     </a>
                  </span>
               </div>
            </div>
         </div>
         <div className="footer-copyright">
            <p>copyright FidelCrestSaving (FCS) &copy; 2019-{year}</p>
         </div>
      </footer>
   );
};

export default Footer;
