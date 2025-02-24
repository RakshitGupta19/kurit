import React from "react";
import './GetinTouch.css';

const GetinTouch=()=>{
    return(
        <div className="aboutSection">
            <div className="aboutSectionContent">
                <h1>Get in Touch with Kurit Consultants</h1>
                <p>Looking for expert guidance in <span>Real Estate Portfolio Management?</span> We're here to help! Connect with us for personalized investments solutions and premium property opportunities.</p>
            </div>
            <div className="aboutSectionImage">
                <div className="asUpper">
                    <div className="upperContent">
                        <p className="uh">Address</p>
                        <p className="up">Scf-61, Downtown, BRS Nagar, Ludhiana - 141001, Punjab INDIA</p>
                    </div>
                    <div className="upperContent2">
                        <p className="uh">Phone</p>
                        <p className="up">+91 95177-77992</p>
                    </div>
                </div>

                <div className="asLower">
                    <div className="LowerContent">
                        <p className="lh">Email</p>
                        <p className="lp">yuktam@kurit.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GetinTouch;