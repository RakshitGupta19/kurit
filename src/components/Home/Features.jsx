import React from "react";
import './Features.css';

const Features=()=>{
    return(
        <div className="features">
            <div className="featuresHeading">
                <p>Our Featured Projects</p>
            </div>
            <div className="featuresContent">
                <div className="featuresItem">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046818/fp_3_lt7wrn.png" alt="" />
                    <p><span>1.</span> AIPL DREAMCITY LUDHIANA</p>
                </div>
                <div className="featuresItem">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046817/fp_2_amvvmr.png" alt="" className="img2"/>
                    <p><span>2.</span> UMBERA ORCHARD</p>
                </div>
                <div className="featuresItem">
                    <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740046818/fp_1_s2ic30.png" alt="" className="img3"/>
                    <p><span>3.</span> RAJGADH ESTATE</p>
                </div>
            </div>
        </div>
    )
}

export default Features;