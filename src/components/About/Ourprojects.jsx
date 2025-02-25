import React, { useRef, useState } from "react";
import './Ourprojects.css';

const Ourproject = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the speed of the scroll
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="ourprojectsection">
            <div className="ourprojectHeading">
                <p>Our Project</p>
            </div>

            <div 
                className="ourproject" 
                ref={scrollRef} 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="imagediv p1">
                    <p>DREAMCITY LUDHIANA</p>
                    <div className="navbarCont">
                        <div className="contactUsHead"><p>Contact Us</p></div>
                        <div className="navbarContactNu">
                            <p>+91 95177 77992</p>
                            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="imagediv p2">
                    <p>UMBERA ORCHARD</p>
                    <div className="navbarCont">
                        <div className="contactUsHead"><p>Contact Us</p></div>
                        <div className="navbarContactNu">
                            <p>+91 95177 77992</p>
                            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="imagediv p3">
                    <p>RAJGADH ESTATE</p>
                    <div className="navbarCont">
                        <div className="contactUsHead"><p>Contact Us</p></div>
                        <div className="navbarContactNu">
                            <p>+91 95177 77992</p>
                            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourproject;
