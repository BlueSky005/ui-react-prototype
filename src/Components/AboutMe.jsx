import React from 'react'
import aboutMeImg from '../images/about-me.png';
import signatureImg from '../images/signature-transparentbg.png';

const AboutMe = () => {
    return (
        <div className="row g-0">
            <div id="aboutMeRow">
                <div className="" id="aboutMeLeft">
                    <img src={aboutMeImg} alt="About me left content" className="img-fluid animated fadeIn" />
                </div>
                <div className="" id="aboutMeRight">
                    <div className="aboutMeContent">
                        <h4 className="animated fadeIn" id="aboutMeCaption">About me</h4>

                        <div className="txtContentColor">
                            <p className="animated fadeIn">
                                Given let waters air sea had you'll, may seed abundantly fish.
                                Were, you'll earth forth winged above brought. Own darkness
                                they're him can't fourth sea place have.
                        </p>
                            <p className="animated fadeIn">
                                So the above May stars cattle fruitful face shall. Tree it, winged.
                                Every signs male firmament us. Morning him.
                        </p>
                        </div>

                        <img src={signatureImg} alt="Signature" className="img-fluid animated fadeIn" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
