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
                alt="image for my Github account"
            />
            <Image
                height="50px"
                width="50px"
                src={linkedInLogo}
                link=""
                alt="an image link for my LinkedIn account"
            />
            <Image
                height="50px"
                width="50px"
                src={stackOfLogo}
                link=""
                alt="image link to my stack overflow"
            />
        </div>
    );
};

export default Footer;