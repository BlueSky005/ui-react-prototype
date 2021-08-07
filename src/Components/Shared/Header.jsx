import React from 'react'
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';

const Header = () => {

    return (
        <nav id="navBar" className="sticky-inner header">
            <div>
                <Link to="overlayImg" smooth={true} duration={500}><img src={logo} alt="Company Logo" className="img-fluid twoGutter" id="logo" /></Link>
            </div>

            <div id="navMenu">
                <span className="menuOption" > <Link to="overlayImg" smooth={true} duration={500}> HOME </Link> </span>
                <span className="menuOption activeMenuOption"> <Link to="aboutMeRow" smooth={true} duration={500}>ABOUT</Link></span>
                <span className="menuOption"><Link to="querySection" smooth={true} duration={500}>CONTACT </Link></span>
            </div>
        </nav>
    )
}

export default Header
