import React from "react";
import Whoweare from "../components/About/Whoweare";
import Choosekurit from "../components/About/Choosekurit";
import Ourproject from "../components/About/Ourprojects";

const About=()=>{
    return(
        <div className="About">
            <Whoweare/>
            <Choosekurit/>
            <Ourproject/>
        </div>
    )
};

export default About;