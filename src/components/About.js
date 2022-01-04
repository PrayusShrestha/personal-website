import headshot from '../data/cartoon_headshot.png';
import json from '../data/resume/resume';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

    return ( 
            <div class="flex p-10 w-11/12 my-10 m-auto text-center bg-glitter">
                <div class="border-2 border-payne_grey bg-light-glitter bg-white rounded-lg p-4 flex flex-col hover:border-oxford_blue hover:shadow-lg">
                    <div class="">
                        <div class="font-extrabold text-xl mb-2 text-oxford_blue">Welcome!</div>
                        <p class="text-base text-payne_grey font-light">
                            {json.personal.about}
                        </p>
                    </div>
                    <div class="flex items-center m-auto mt-1">
                        <img class="w-10 h-10 p-1 border border-black rounded-full mr-2 mt-2" src={headshot} alt="Avatar of Prayus"></img>
                        <div class="text-sm text-payne_grey">
                            <ul className="list-none text-lg">
                                <li className="inline pr-4 border-r-2 mr-4 border-royal_blue font-extralight">
                                    Prayus Shrestha 
                                </li>
                                <li className="inline block pr-4 hover:bold">
                                    <a target="_blank" href={json.personal.linkedin_url}>
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li className="inline block pr-4">
                                    <a target="_blank" href={json.personal.github_url}>
                                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li className="inline block pr-4">
                                    <a target="_blank" href={"mailto:" + json.personal.email}>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

     );
}

export default About;