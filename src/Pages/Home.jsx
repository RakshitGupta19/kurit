import React from 'react';
import About from '../components/Home/About';
import Feature from '../components/Home/Features';
import Venue from '../components/Home/Venue';
import Discover from '../components/Home/Discover';

const Home=()=>{
    return(
        <div className="Home">
            <About/>
            <Feature/>
            <Venue/>
            <Discover/>
        </div>
    )
};

export default Home;