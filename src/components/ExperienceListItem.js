import { Disclosure } from '@headlessui/react';
import { faArrowDown, faArrowUp, faMapPin, faCalendar, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ExperienceListItem(props) {
  
  const {
    company, 
    logo,
    link,
    title, 
    start, 
    end, 
    location, 
    bullets } = props.data;

  const [arrowDir, setArrowDir] = useState(-1);
  const handleClick = () => {
    setArrowDir(arrowDir * -1);
  }

  const logo_route = require("../data/logos/" + logo);

  return (
      <>
        <div className="flex flex-col justify-center h-1/3 m-4 relative">
          <div
            class="w-full flex flex-row space-x-5 space-y-3 rounded-lg hover:shadow-lg p-3 mx-auto bg-white">
            <div className="w-1/4 grid place-items-center">
              <a href={link} target="_blank">
                <img src={logo_route} alt="Company Logo"/>
              </a>
            </div>
            <div className="w-full flex-col p-3 inline">
              <div className="text-oxford_blue"> 
                <div className="font-black  text-xl">
                  {company}
                </div> 
                <div className="text-lg">
                  {title}
                </div>
              </div>
              <p className="text-royal_blue font-light">
                <ul className="list-disc">
                  {bullets.map(bullet => {
                    return(
                      <li className="ml-4">
                        {bullet}
                      </li>
                    
                    )
                  })}
                </ul>   
              </p>
            </div>
          </div>
        </div>
      </> 
    );
}

export default ExperienceListItem;