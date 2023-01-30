import React, {useState} from "react";
import Logo  from '../../assets/logo2.png';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter,FaYoutube} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from  'react-icons/ai'
import {Link} from 'react-router-dom';


//import {Link} from 'react-scroll';


import './NavbarStyles.css';

function Navbar(){

    const [nav, setNav] = useState(false);

    const handleNav = ()=> setNav(!nav);
    
    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>

            <div className="logo">
                <img src={Logo} alt="logo" className="logoimg"/>
            </div>

            <ul className="nav-menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/menu'>Menu</Link></li>
                <li><Link to ='/reservation'>Reservation</Link></li>
                <li><Link to='/contact'>Contact</Link> </li>
            </ul>

            <div className="nav-icons">               
               <BiSearch className="icon" style={{marginRight: '1rem'}} />
               <BsPerson className="icon" />
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon'/>) : (<AiOutlineClose className="icon dark" />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>

                <ul className="mobile-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/menu'>Menu</Link></li>
                <li><Link to ='/reservation'>Reservation</Link></li>
                <li><Link to='/contact'>Contact</Link> </li>
                 </ul>

                <div className="mobile-menu-bottom">
                    <div className="mennu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                </div>

                <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                </div>
            </div>

        </div>
    )
}

export default Navbar