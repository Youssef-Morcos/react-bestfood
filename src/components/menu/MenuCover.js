import React from "react";
import {entreecuisine, imgsource} from "./MenuInfo";


function MenuCover (props) {

    let menudiv=[];

    for(let index=0; index < entreecuisine.length; ++index){
        menudiv.push(<div className="entrees" key={index}>
        <div className="entrees-con" >
            <img src={imgsource[index]} id={index} onClick={props.handleClick} alt="/"/>
            <p>The {entreecuisine[index]} entree<br/><span className="price">$30</span> </p>
        </div>
    </div>);
        }

    return (
        <div className="menu-cover">
            {menudiv}
        </div>
    )
}

export default MenuCover;