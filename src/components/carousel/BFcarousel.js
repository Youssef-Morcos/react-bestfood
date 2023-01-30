import React from "react";
import './BFcarouselStyles.css'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Chinese from '../../assets/chinese.jpg';
import Ethiopian from '../../assets/ethiopian.jpg';
import Indian from '../../assets/indian.jpeg';
import Mexican from '../../assets/mexican.jpg';
import Vietnamese from '../../assets/vietnamese.jpg';



function BFcarousel () {
    return (
        <div className="carouseldiv">
            <h2 className="carouselHeading">
                Menu Highlights
            </h2>

            <Carousel className="carousel" showArrows={true}  autoPlay={true} infiniteLoop={true}  	>
                    <div>
                        <img src={Chinese} alt="/"/>
                        <p className="legend">Chinese</p>
                    </div>
                    <div>
                        <img src={Ethiopian} alt="/"/>
                        <p className="legend">Ethiopian </p>
                    </div>
                    <div>
                        <img src={Indian} alt="/"/>
                        <p className="legend">Indian </p>
                    </div>
                    <div>
                        <img src={Mexican} alt="/"/>
                        <p className="legend">Mexican </p>
                    </div>
                    <div>
                        <img src={Vietnamese} alt="/"/>
                        <p className="legend">Vietnamese </p>
                    </div>
                    
            </Carousel>



        </div>
    )

}

export default BFcarousel;