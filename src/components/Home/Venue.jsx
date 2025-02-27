import React, { useState, useEffect } from "react";
import "./Venue.css";

const images = [
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030924/Image-2_mqwuxs.png",
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030925/Image-1_p7l0c6.png",
  "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030939/Image_g8stec.png"
];

const propertiesList = [
  { name: "500+* Acre Smart Township", img: "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030989/Background_Image_xxv3gf.png" },
  { name: "7.4-Acre Central Lake", img: "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030925/Image-1_p7l0c6.png" },
  { name: "Club Aqua", img: "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030924/Image-2_mqwuxs.png" },
  { name: "Integrated Amenities", img: "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030939/Image_g8stec.png" },
  { name: "Green Environment", img: "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740030989/Background_Image_xxv3gf.png" }
];

const Venue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [showNewImage, setShowNewImage] = useState(false);

  // Auto-scroll for images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for properties every 5 seconds with smooth transition
  useEffect(() => {
    const propertyInterval = setInterval(() => {
      setShowNewImage(false); // Start fade out
      setTimeout(() => {
        setSelectedProperty((prev) => (prev + 1) % propertiesList.length);
        setShowNewImage(true); // Start fade in
      }, 500); // Match CSS animation duration
    }, 5000);

    return () => clearInterval(propertyInterval);
  }, []);

  return (
    <div className="bigdiv">
      <div className="venue">
        <div className="venueUpper">
          <img src={images[currentIndex]} alt="Venue" className="carouselImage" />
          <div className="carouselControls">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carouselButton ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="venueLower">
          <div className="venuwLowerDetail">
            <div className="venueLowerDHeading">
              <p>DREAMCITY LUDHIANA</p>
              <div className="navbarCc">
                <div className="contactUu">
                  <p>Contact Us</p>
                </div>
                <div className="navbarCn">
                  <p>+91 95177 77992</p>
                  <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                </div>
              </div>
            </div>
            <div className="venueLowerDDetails">
              <div className="venueLeft">
                {propertiesList.map((property, index) => (
                  <p
                    key={index}
                    className={`properties ${selectedProperty === index ? "selected" : ""}`}
                    onClick={() => {
                      setShowNewImage(false);
                      setTimeout(() => {
                        setSelectedProperty(index);
                        setShowNewImage(true);
                      }, 500);
                    }}
                  >
                    {selectedProperty === index ? `—— ${property.name}` : property.name}
                  </p>
                ))}
              </div>
              <div className="venueRight">
                <img
                  src={propertiesList[selectedProperty].img}
                  alt=""
                  className={`venueImage ${showNewImage ? "active" : ""}`}
                />
                <p>A modern development incorporating smart technology and sustainable practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
