import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function ProjectListItem(props) {
    const {
      name, 
      github_url, 
      description,
      logo, 
      completed, 
      tech_stack} = props.data; 
    const [arrowDir, setArrowDir] = useState(-1);
    
    console.log(logo);
    const logo_route = require("../data/logos/" + logo);    
    return (
        <div className="border-2 p-2 hover:bg-zinc-300">
            <div className="py-2 w-full">
              <div className="w-1/4 grid place-items-center">
                  <img src={logo_route} alt="Company Logo"/>
              </div>
                <div className="inline float-left text-left"> 
                    {name}
                  <a className="pl-4" href={github_url} target="_blank" >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <br></br>
                  
                </div>

                <div className="inline float-right text-left"> 
                  <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>: {completed}
                </div>
            </div>
            <div className="text-gray-500">
                {description}
            </div>

        </div>
          
      );
}

export default ProjectListItem;