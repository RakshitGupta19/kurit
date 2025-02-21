import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footerUpper">
                <div className="footerSocialMedia">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740111474/fttrlogo_xohaej.png" alt="" />
                    <div className="socialMediaIcons">
                        <div className="smimg">
                            <a href="#"><img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740116985/Icon_zwmah3.png" alt="" /></a> 
                        </div>
                        <div className="smimg">
                            <a href="#"><img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740116985/Facebook_logo_w7i7jv.png" alt="" /></a>
                        </div>
                        <div className="smimg">
                            <a href="#"><img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740116985/Play_icon_xuoqlw.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="footerLinks">
                    <a href="#"><span>Home</span></a>
                    <a href="#"><span>About</span></a>
                    <a href="#"><span>Contact</span></a>
                </div>

                <div className="footerForm">
                    <div className="contact">
                        <div className="contactUs">
                            <p>Contact Us</p>
                        </div>
                        <div className="contactNumber">
                            <p>+91 95177 77992</p>
                            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                        </div>
                    </div>

                    <div className="footerFormInput">
                        <input type="text" placeholder="Name"/>
                        <input type="number" placeholder="Phone"/>
                        <input type="email" placeholder="Email"/>
                        <textarea placeholder="Message"></textarea>
                        <input type="range" placeholder="Drag to send" value={0} className="progressBar"/>
                    </div>


                </div>
            </div>
            <div className="footerLower">
                <div className="footerLowerLeft">
                    <p>Copyright by Kurit 25-2026</p>
                </div>
                <div className="footerLowerRight">
                    <p>Designed & Developed by PITAMAAS</p>
                </div>
            </div>
        </div>
    ) 
}

export default Footer;