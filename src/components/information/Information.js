import React from "react";
import './InformationStyles.css';

import {MdGroups} from 'react-icons/md';
import { BsBag } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {FiCreditCard} from "react-icons/fi"


function Information (){
    return (
        <div className="information">

            <div className="career info">
                <MdGroups className='info-icons' />
                <p> Join Us</p>
                <button>View Careers</button>
            </div>

            <div className="catering info">
                <BsBag className="info-icons" />
                <p>Catering</p>
                <button>Learn More</button>
            </div>

            <div className="signup info">
                <AiOutlineMail className="info-icons" />
                <p>Sign up for offers </p>
                <button>Sign Up</button>
            </div>

            <div className="gift-card info">
                <FiCreditCard className="info-icons" />
                <p> Gift Card</p>
                <button>Learn More</button>

            </div>




        </div>
    )
}

export default Information;