import { useState } from "react";
import logo from "../MyWeb/assets/images/logo-black-removebg-preview.png"
import "../MyWeb/css/GetTheApp.css"
import Login from "./Login"
import Signup from "./Signup"
import { Section5 } from "./Component/Section5";
import { Footer } from "./Component/Footer";
export function GetTheApp() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

   
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);
    return (
        <>
                     
                        <div className="zomato-logo">
                            <div><img src={logo} alt="Zomato" width="150" height="60" /></div>
                        
                        
                            <div><span><span onClick={() => setLoginOpen(true)} style={{ cursor: "pointer" }}>Login</span>
                                <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /></span></div>
                            <div><span><span onClick={openPopup} style={{ cursor: "pointer" }}>Sign Up</span>

                                <Signup isOpen={isPopupOpen} onClose={closePopup} /></span></div></div>
                    <Section5/>
                    <Footer/>
        </>
    )

}