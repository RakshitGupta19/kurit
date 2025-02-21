import React from "react";
import "./Venue.css";

const Venue = () => {
  return (
    <div className="venue">
        <div className="venueUpper">
            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030924/Image-2_mqwuxs.png" alt="" />
        </div>
        <div className="venueLower">
            <div className="venuwLowerDetail">
                <div className="venueLowerDHeading">
                    <p>DREAMCITY LUDHIANA</p>
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
                <div className="venueLowerDDetails">
                    <div className="venueLeft">
                        <p>---- 500+* Acre Smart Township</p>
                        <p className="properties">7.4-Acre Central Lake</p>
                        <p className="properties">Club Aqua</p>
                        <p className="properties">Integrated Amenities</p>
                        <p className="properties">Green Environment</p>
                    </div>
                    <div className="venueRight">
                        <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030989/Background_Image_xxv3gf.png" alt="" />
                        <p>A modern development incorporating smart technology and sustainable practices</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Venue;
