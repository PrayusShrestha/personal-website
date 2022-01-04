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
    
    const logo_route = require("../data/logos/" + logo);    
    return (
        <div className="flex flex-col justify-center h-5/6 m-10 relative">
            <div className="w-full flex flex-row space-x-5 space-y-3 rounded-lg hover:shadow-lg p-3 mx-auto bg-white">
              <div className="w-2/5 grid place-items-center">
                  <img src={logo_route} alt="Project Image"/>
              </div>
              <div className="w-full flex-col p-6 inline">
                <div className="text-oxford_blue font-bold text-xl"> 
                    {name}
                  <a className="pl-4" href={github_url} target="_blank" >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <br></br>
                  
                </div>
              <div className="text-payne_grey font-light pt-4">
                  <p>{description}</p>
              </div>
              </div>
            </div>
        </div>
          
      );
}

export default ProjectListItem;