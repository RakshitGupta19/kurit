import React, { useState, useEffect } from "react";
import "./Venue.css";

const images = [
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030924/Image-2_mqwuxs.png",
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030925/Image-1_p7l0c6.png",
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030939/Image_g8stec.png"
];

const Venue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to change slide when clicking on buttons
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="venue">
      <div className="venueUpper">
        <img src={images[currentIndex]} alt="Venue" className="carouselImage" />
        <div className="carouselControls">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carouselButton ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
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
