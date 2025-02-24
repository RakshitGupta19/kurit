import React from 'react';
import './Header.css';
import Kurit from '../assets/KuritIcon.png'

function Header(){
    return(
        <div className="mainNavbar">
            <div className='navbar'>
                <div className="navbarImg">
                    <img src={Kurit} alt="" />
                </div>
                <div className="navbarItems">
                    <a href="/"><span>Home</span></a>
                    <a href="/about"><span>About</span></a>
                    <a href="/contact"><span>Contact</span></a>
                </div>
                <div className="navbarContact">
                    <div className="contactUsHeading">
                        <p>Contact Us</p>
                    </div>
                    <div className="navbarContactNumber">
                        <p>+91 95177 77992</p>
                        <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;