import React from "react";
import './About.css';

import { useEffect } from "react";
import AOS from "aos";

const About=()=>{
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);
    return(
        <div className="aboutUs">
            <div className="aboutHeading">
                <p data-aos="fade-up">Why Kurit?</p>
            </div>
            <div className="aboutContent">
                <p data-aos="fade-up">Expert <span>REAL ESTATE PORTFOLIO MANAGEMENT</span> tailored for smart investments and maximum returns. We connect you with <span>PREMIUM PROPERTIES AND STRATEGIC OPPORTUNITIES,</span> ensuring long term growth</p>
            </div>
        </div>
    )
}

export default About;