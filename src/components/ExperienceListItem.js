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
      <div onClick={handleClick} className="border-2 p-2 hover:bg-zinc-300">
        <Disclosure>
          <Disclosure.Button className="py-2 w-full inline">
              {/* <div className="inline float-left">
                <img src={logo_route}></img>
              </div> */}
              <div className="text-left inline float-left"> 
                <a className="hover:font-medium" href={link} target="_blank" >
                  <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>: {company} 
                </a>
                <br></br>
                <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>: {title}
                <br></br>
              {/* </div>
              <div className="inline text-left float-right">  */}
                <FontAwesomeIcon className="" icon={faMapPin}></FontAwesomeIcon> : {location}                
                  <br></br>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>: {start} - {end ? end : "Present"}
              </div>
              <div className="inline">
                <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
              </div>

          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
              <ul className="list-disc">
                {bullets.map(bullet => {
                  return(
                    <li className="hover:font-medium ml-4">
                      {bullet}
                    </li>
                  
                  )
                })}
              </ul>
          </Disclosure.Panel>
        </Disclosure>
      </div>
        
    );
    // return ( 
    //     <span> An Item </span>
    //  );
}

export default ExperienceListItem;