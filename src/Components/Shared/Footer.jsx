import React from 'react';

function getYear () {
    return new Date().getFullYear();
}

const Footer = () => {

    return (

        <footer className="footer" >
            <div className="footerCompanyContainer">
                <h5 className="footerCompanyName">Piroll Design, Inc.</h5>
                <span className="copywriteInfo">© <span> {getYear()} </span> Piroll. All rights
                    reserved.</span><br />
                <span>Designed by robirurk.</span>
            </div>

            <div className="footerEmailContainer">
                <p className="footerEmailContent">hello@pirolltheme.com <br />
                    +44 987 065 908</p>
            </div>

            <div className="workDetailsContainer">
                <div>Projects</div>
                <div>About</div>
                <div>Services</div>
                <div>Career</div>
            </div>

            <div className="actionOptions">
                <div>News</div>
                <div>Events</div>
                <div>Contact</div>
                <div>Legals</div>
            </div>

            <div className="socialMediaOptions">
                <div>Facebook</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>Dribbble</div>
            </div>
        </footer >

    )
}

export default Footer
