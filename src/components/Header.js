import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import json  from '../data/resume/resume';
import { forwardRef } from 'react';
import { Link, animateScroll } from "react-scroll";


function Header(props) {
    let Scroll = require('react-scroll');
    let scroller = Scroll.scroller;
    const offset = props.offset;


    const {
        email, 
        linkedin_url,
        github_url
    } = json.personal;

    
    return (
        <div className="sticky absolute top-0 width-full text-white text-xl px-6 py-6 bg-oxford_blue  shadow-xl z-10"> 
        {/* // <div className="sticky absolute top-0"> */}
            <ul className="list-none">
                <li  onClick={() => {animateScroll.scrollToTop()}} className="inline pr-4 border-r-2 border-glitter mr-4">
                    Prayus Shrestha
                </li>

                <li className="inline pr-4">
                    <a target="_blank" href={linkedin_url}>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="inline pr-4">
                    <a target="_blank" href={github_url}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="inline pr-4">
                    <a target="_blank" href={"mailto:" + email}>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                </li>

                <li className="header-section">
                <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                >
                        Projects
                </Link>
                </li>
                <li className="header-section border-r-2 border-white">
                <Link
                    activeClass="active"
                    to="Additional Experience"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                >
                        Additional Experience
                </Link>
                    </li>
                <li className="header-section border-r-2 border-white">
                    <Link
                        activeClass="active"
                        to="Work Experience"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={500}
                    >
                            Work Experience
                    </Link>
                
                </li>
                <li className="header-section border-r-2 border-white">
                <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                >
                        About
                </Link>
                </li>


            </ul>
        </div>
    );

}

export default Header;