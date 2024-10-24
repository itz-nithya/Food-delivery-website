import logo from "../assets/images/logo-black-removebg-preview.png";
import "../css/Footer.css";
import googleplay from "../assets/images/gooleplay-removebg-preview.png"
export function Footer() {
    return (
        <>
        <div className="footer">
            <div className="top">
                <div className="top1">

                    <img src={logo} />
                    <div className="lang">
                       <select className="p-2 m-2">
                            <option value="">India</option>
                            <option value="">UAE</option>
                        </select> 
                        <select className="p-2 m-2">
                            <option value="">English</option>
                            <option value="">Türkçe</option>
                            <option value="">हिंदी</option>
                            <option value="">Português (BR)</option>
                            <option value="">Indonesian</option>
                            <option value="">Português (PT)</option>
                            <option value="">Español</option>
                            <option value="">Čeština</option>
                            <option value="">Slovenčina</option>
                            <option value="">Vietnamese</option>
                            <option value="">Polish</option>
                            <option value="">Italian</option>
                          </select> 
                        </div>
                        </div>
                        </div>
                        <div className="bottom1">
                            <div className="bottomcontent">
                                <h4>ABOUT ZOMATO</h4>
                                <p>Who we are</p>
                                <p>Blog</p>
                                <p>Work with us</p>
                                <p>Investor Relations</p>
                                <p>Report Fraud</p>
                                <p>Contact us</p>
                            </div>
                            <div className="bottomcontent">
                                <h4>ZOMAVERSE</h4>
                                <p>Zomato</p>
                                <p>Blinkit</p>
                                <p>Feeding India</p>
                                <p>Hyper Pure</p>
                                <p>Zomaland</p>
                                <p>Weather Union</p>
                            </div>
                            <div className="bottomcontent">
                                <h4>FOR RESTAURANTS</h4>
                                <p>Partner with us</p>
                                <p>Apps for u</p>
                            </div>
                            <div className="bottomcontent">
                                <h4>LEARN MORE</h4>
                                <p>Privacy</p>
                                <p>Security</p>
                                <p>Terms</p>
                                <p>Sitemap</p>
                            </div>
                            <div className="bottomcontent">
                                <h4>SOCIAL LINKS</h4>
                                <div className="links">
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-square-x-twitter"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-facebook"></i>
                                </div>
                                <img src={googleplay}/>
                               </div>
                               </div>
                               <hr/>
                            <div className="bottom">
                               <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
                                All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                            </div>
                        </div>
                        
        </>
    )
}