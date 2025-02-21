import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className='navbar'>
            <div className="navbarImg">
                <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030603/Kurit_dxaoxt.png" alt="" />
            </div>
            <div className="navbarItems">
                <a href="#"><span>Home</span></a>
                <a href="#"><span>About</span></a>
                <a href="#"><span>Contact</span></a>
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
    );
}

export default Header;