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
        <div class="flex flex-col justify-center h-1/3 m-4">
          <div
            class="relative w-5/6 flex md:flex-row space-x-5 space-y-3 space-y-0 rounded-xl shadow-lg p-3 mx-auto border border-black bg-white relative">
            <div class="w-full w-1/4 bg-white grid place-items-center text-xs">
              <img src={logo_route} alt="Company Logo"/>
            </div>
            <div class="w-full bg-white flex-col p-3 inline">
              <div class="font-black text-gray-800 text-lg"> 
                <div>
                  {company}
                </div> 
                <div>{title}</div>
              </div>
              <p class="md:text-lg text-gray-500 text-base">
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