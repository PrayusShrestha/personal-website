import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import json  from '../data/resume/resume';
import { forwardRef } from 'react';

// function Header(props) {
const Header = forwardRef(({ workExperienceClick }, ref) => {

    const {
        email, 
        linkedin_url,
        github_url
    } = json.personal;

    
    return (
        <nav className="sticky absolute top-0 width-full bg-oxford_blue text-white text-lg px-6 py-6 drop-shadow-xl">
            <ul className="list-none">
                <li className="inline pr-4 border-r-2 border-glitter mr-6">
                    Prayus Shrestha
                </li>

                <li className="inline block pr-4">
                    <a target="_blank" href={linkedin_url}>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="inline block pr-4">
                    <a target="_blank" href={github_url}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="inline block pr-4">
                    <a target="_blank" href={"mailto:" + email}>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </nav>
    );

  }
)
export default Header;