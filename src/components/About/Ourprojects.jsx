import React, { useEffect, useRef, useState } from "react";
import "./Ourprojects.css";

const projects = [
    { name: "DREAMCITY LUDHIANA", img: require("../../assets/scroll1.png") },
    { name: "UMBERA ORCHARD", img: require("../../assets/scroll2.png") },
    { name: "RAJGADH ESTATE", img: require("../../assets/scroll3.png") },
];

const Ourproject = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        let scrollSpeed = 0.7;

        const scrollLoop = () => {
            if (!isDragging) {
                scrollElement.scrollLeft += scrollSpeed;
                if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
                    scrollElement.scrollLeft = 0;
                }
            }
            requestAnimationFrame(scrollLoop);
        };

        scrollLoop();
    }, [isDragging]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="ourprojectsection">
            <div className="ourprojectHeading">
                <p>Our Projects</p>
            </div>

            <div className="ourproject" ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp} >
                {[...projects, ...projects].map((project, index) => (
                    <div key={index} className="imagediv" style={{ backgroundImage: `url(${project.img})` }} >
                        <p>{project.name}</p>
                        <div className="navbarCont">
                            <div className="contactUsHead">
                                <p>Contact Us</p>
                            </div>
                            <div className="navbarContactNu">
                                <p>+91 95177 77992</p>
                                <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourproject;
