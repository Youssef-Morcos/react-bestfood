
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo  from '../../assets/logo2.png';

import './FooterStyles.css'

function Footer (){
    return (
        <div className="footer">
            <div className="container">

                <div className="top">
                <img src={Logo} alt="logo" className="logoimg"/>

                    <div className="social">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />

                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Careers</li>
                            <li>Sign Up</li>
                            <li>Gift Card</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Legal</li>
                    
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;