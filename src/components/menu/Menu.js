import React, {useState} from "react";
import './MenuStyles.css'

import MenuCover from './MenuCover';
import { entreename, entreedisc} from "./MenuInfo";

import { AiOutlineClose } from "react-icons/ai";





function Menu (){

    const [overlayStatus, setOverlayStatus] = useState(false);
    const [imageSource, setImageSource] = useState();
    const [imageIndex, setImageIndex] = useState();

    let bodySelector =  document.body;
    let bodyHeight = bodySelector.offsetHeight;


    const handleClick = (event)=> {
        setOverlayStatus(true);

        const updatedImage = event.target.getAttribute('src');
        setImageSource(updatedImage);

        const updatedIndex= event.target.getAttribute('id');
        setImageIndex(updatedIndex);
    }

    const handleClose = ()=> setOverlayStatus(false);

        
    return (
        
            <div className="container">
                <h1>Menu</h1>
            

                <div className="menu">
                    <MenuCover handleClick = {handleClick} />
                </div>

                <div className={overlayStatus ? "overlay active" : "overlay"} style={{height : bodyHeight}}>
                    <div className="overlay-container">

                    <div className="close"><AiOutlineClose className="icon" onClick={handleClose} /></div>

                    <div className="overlayimage">
                        <img src={imageSource} alt="/" />
                    </div>
                    
                    <div className="overlay-bottom">
                        <div className="entreename">
                            {entreename[imageIndex]}
                        </div>

                        <div className="discription">
                            {entreedisc[imageIndex]}
                        </div>
                    </div>
                    </div>


                </div>

                
            </div>
        
    )
}

export default Menu;