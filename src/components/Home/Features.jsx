import React from "react";
import './Features.css';

const Features=()=>{
    return(
        <div className="features">
            <div className="featuresHeading">
                <p data-aos="fade-up">Our Featured Projects</p>
            </div>
            <div className="featuresContent">
                <div className="featuresItem">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046818/fp_3_lt7wrn.png" alt="" data-aos="fade-up-right"/>
                    <p data-aos="fade-up-right"><span>1.</span> AIPL DREAMCITY LUDHIANA</p>
                </div>
                <div className="featuresItem">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046817/fp_2_amvvmr.png" alt="" data-aos="fade-up" className="img2"/>
                    <p data-aos="fade-up"><span>2.</span> UMBERA ORCHARD</p>
                </div>
                <div className="featuresItem" data-aos="fade-up-left">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046818/fp_1_s2ic30.png" alt="" data-aos="fade-up-left" className="img3"/>
                    <p data-aos="fade-up-left"><span>3.</span> RAJGADH ESTATE</p>
                </div>
            </div>
        </div>
    )
}

export default Features;