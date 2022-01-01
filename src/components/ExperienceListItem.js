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


  return (
      <div onClick={handleClick} className="border-2 p-2 hover:bg-zinc-300">
        <Disclosure>
          <Disclosure.Button className="py-2 w-full">
              {/* <div className="inline float-left h-1/6">
                <img src={logo_route}></img>
              </div> */}
              <div className="inline float-left text-left"> 
                <a className="hover:font-medium" href={link} target="_blank" >
                  <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>: {company} 
                </a>
                <br></br>
                <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>: {title}
              </div>
              <div className="inline float-center">
                <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
              </div>
              <div className="inline float-right text-left"> 
                <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>: {location}
                <br></br>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>: {start} - {end ? end : "Present"}
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