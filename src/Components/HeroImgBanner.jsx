import React from 'react'
import headerAboutMeImg from '../images/header-about-me.png';

const HeroImgBanner = () => {
    return (
        <div className="row g-0">
            <div id="overlayImg">
                <div id="overlayTxtSection">
                    <div >
                        <h2 className="headerTxtColor animated fadeIn"> Amelia Woods</h2>
                    </div>
                    <div className="animated fadeInUp">
                        I am a Graphic & Web Designer based in New York, specializing
                        in User Interface Design and Development.
                </div>
                </div>

            </div>
            <img src={headerAboutMeImg} alt="About Me" className="img-fluid aboutMeImg animated fadeIn" id="aboutMeImg" />

        </div >
    )
}

export default HeroImgBanner
