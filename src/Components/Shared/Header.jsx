import React, { useState } from 'react'
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';

const Header = () => {

    const [activeMenu, setActiveMenu] = useState( "HOME" );

    const homeMenuClicked = () => setActiveMenu( "HOME" );

    const aboutMenuClicked = () => setActiveMenu( "ABOUT" );

    const contactMenuClicked = () => setActiveMenu( "CONTACT" );

    return (
        <nav id="navBar" className="sticky-inner header">
            <div>
                <Link to="overlayImg" smooth={true} duration={500}><img src={logo} alt="Company Logo" className="img-fluid twoGutter" id="logo" /></Link>
            </div>

            <div id="navMenu">
                <span className={`${activeMenu === 'HOME' ? 'menuOption activeMenuOption' : 'menuOption'} `} > <Link to="overlayImg" smooth={true} duration={500} onClick={homeMenuClicked}> HOME </Link> </span>
                <span className={`${activeMenu === 'ABOUT' ? 'menuOption activeMenuOption' : 'menuOption'} `}> <Link to="aboutMeRow" smooth={true} duration={500} onClick={aboutMenuClicked}>ABOUT</Link></span>
                <span className={`${activeMenu === 'CONTACT' ? 'menuOption activeMenuOption' : 'menuOption'} `}><Link to="querySection" smooth={true} duration={500} onClick={contactMenuClicked}>CONTACT </Link></span>
            </div>
        </nav>
    )
}

export default Header
