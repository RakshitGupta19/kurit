import React from "react";
import './Footer.css';
import footerimg from '../assets/footerimg.png';
import Kurit from '../assets/KuritIcon.png';

const Footer=()=>{
    return(
    <div className="completeFooter">    
        <div className="footer">
            <div className="footerUpper">

                <div className="footerLeft">
                    <div className="footerKuritImg">
                        <img src={Kurit} alt="" />
                    </div>
                    <div className="footerNavLinks">
                        <a href="/"><span>Home</span></a>
                        <a href="/about"><span>About</span></a>
                        <a href="/contact"><span>Contact</span></a>
                    </div>
                    <div className="footerSocialLinks">
                        <a href="#"><span>Instagram</span></a>
                        <a href="#"><span>Youtube</span></a>
                        <a href="#"><span>Facebook</span></a>
                    </div>
                    <div className="footerContent">
                        <div className="footerC">
                            <p className="fh">Address</p>
                            <p className="fp">Scf-61, Downtown, BRS Nagar, Ludhiana - 141001, Punjab INDIA</p>
                        </div>

                        <div className="footerC">
                            <p className="fh">Email</p>
                            <p className="fp">yuktam@kurit.in</p>
                        </div>

                        <div className="navbarC">
                            <div className="contactU">
                                <p>Contact Us</p>
                            </div>
                            <div className="navbarContactN">
                                <p>+91 95177 77992</p>
                                <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fRightImg">
                    <img src={footerimg} alt="" />
                </div>
            </div>
        </div>
        <div className="footerLower">
            <div className="footerFirst">
                <p>Copyright by Kurit 25-2026</p>
            </div>
            <div className="footerSecond">
                <p>Designed & Developed by PITAMAAS</p>
            </div>
        </div>
    </div>
    ) 
}

export default Footer;