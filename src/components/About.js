import headshot from '../data/cartoon_headshot.png';
import json from '../data/resume/resume';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

    return ( 
            <div class="flex p-10 w-3/4 m-auto mb-20 text-center bg-black">
                <div class="border border-gray-400 bg-white rounded-3xl p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <div class="text-white font-bold text-xl mb-2">Welcome!</div>
                        <p class="text-gray-700 text-base">
                            {json.personal.about}
                        </p>
                    </div>
                    <div class="flex items-center m-auto mt-2">
                        <img class="w-10 h-10 rounded-full mr-4" src={headshot} alt="Avatar of Prayus"></img>
                        <div class="text-sm">
                            <ul className="m-0 p-0 list-none text-lg">
                                <li className="inline pr-4 border-r-2 mr-6 border-black ">
                                    Prayus Shrestha
                                </li>
                                <li className="inline block pr-4">
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