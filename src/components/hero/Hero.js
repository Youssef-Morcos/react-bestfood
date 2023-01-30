import React from "react";
import './HeroStyles.css';

import International from '../../assets/internatinalfood.jpg'

function Hero (){

    return (
        <div className="hero"> 
            <h1 className="heroHeading">Simply the BEST FOOD</h1>
             <div className="indexdiv">
            <section id="indexImage">
            <img className="intimg" src={International} alt="/" />
			<input type="button" value="Explore Our Menu" title="Menu" id="exploreMenu"   />
        </section>
        </div>


        </div>
    )
}

export default Hero;