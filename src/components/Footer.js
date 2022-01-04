import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import json  from '../data/resume/resume';

function Footer() {
    const {
      email, 
      linkedin_url,
      github_url
    } = json.personal;

    
    return (
      <ul className="list-none text-center p-5 border-t-1 bg-royal_blue hover:bg-oxford_blue  text-white">
        <li className="inline pr-4 border-r-2 border-glitter mr-6">
            Made by Prayus Shrestha &copy; {new Date().getFullYear()}
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
    );
  }
  
export default Footer;