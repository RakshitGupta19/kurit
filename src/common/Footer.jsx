import React from "react";
import './Footer.css';
import footerimg from '../assets/footerimg.png';
import Kurit from '../assets/KuritIcon.png';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footerUpper">

                <div className="footerLeft">
                    <div className="footerKuritImg">
                        <img src={Kurit} alt="" />
                    </div>
                    <div className="footerNavLinks">
                        <a href="#"><span>Home</span></a>
                        <a href="#"><span>About</span></a>
                        <a href="#"><span>Contact</span></a>
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
                    </div>
                </div>

                <div className="fRightImg">
                    <img src={footerimg} alt="" />
                </div>
            </div>
        </div>
    ) 
}

export default Footer;