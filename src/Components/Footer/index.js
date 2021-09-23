import React from 'react';
import Image from '../Image';
import linkedInLogo from '../../assets/linkedin.png';
import stackOfLogo from '../../assets/overflow-logo.png';
import githubLogo from '../../assets/GitHub-Mark.png';
import './Footer.css';

const Footer = () => {
    return (
        // Logos with link for social medias
        <div className="footer-container">
            <Image
                height="50px"
                width="50px"
                src={githubLogo}
                link="https://github.com/Chris-L985"
                alt="logo for my Github account"
            />
            <Image
                height="50px"
                width="50px"
                src={linkedInLogo}
                link="https://www.linkedin.com/in/christian-lopez-883735153/"
                alt="a logo link for my LinkedIn account"
            />
            <Image
                height="50px"
                width="50px"
                src={stackOfLogo}
                link="https://stackoverflow.com/"
                alt="logo link to my stack overflow"
            />
        </div>
    );
};

export default Footer;