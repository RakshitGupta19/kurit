import React, { useState } from "react";
import './FormSection.css';

const FormSection=()=>{
    const [progress, setProgress] = useState(0);
    return(
        <div className="formS">
            <div className="formStart">
                <div className="formHead">
                    <p className="fh">Let's Build Your Real Estate Future Together!</p>
                    <p className="fp">Fill out the form below, and our experts will get back to you soon</p>
                </div>
                
                <div className="formLower">
                    <div className="formInputs">
                        <input type="text" placeholder="Name"/>
                        <input type="number" placeholder="Phone No."/>
                        <input type="email" placeholder="Email"/>
                        <textarea placeholder="Message"></textarea>
                        <input 
                            type="range" 
                            min={0} 
                            max={100} 
                            value={progress} 
                            onChange={(e) => setProgress(e.target.value)} 
                            className="progressBar" 
                        />
                    </div>

                    <div className="formMap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3423.9427500942074!2d75.8031968!3d30.8882625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8181f5f9ef23%3A0xaca3c50f2aaaaf2b!2sBhai%20Randhir%20Singh%20Nagar%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1740221015133!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormSection;