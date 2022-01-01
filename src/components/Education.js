import json  from '../data/resume/resume';
import { Disclosure } from '@headlessui/react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Education() {
    const education_data = json["education"];
    const [arrowDir, setArrowDir] = useState(-1);
    const handleClick = () => {
        console.log(arrowDir);
        setArrowDir(arrowDir * -1);
    }

    return (  
        <>
        <div>
            {/* <Disclosure>
            <Disclosure.Button className="py-2 bg-blue-300" onClick={handleClick}>
                <h1>Education <FontAwesomeIcon icon={`${arrowDir > -5 ? faArrowDown : faArrowDown}`}></FontAwesomeIcon></h1>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="inline mt-14">
                    {education_data["relevant_coursework"].map((course) => {
                        return (
                            <div>{course}</div> 
                        )
                    })
                    }   
                </div>
            </Disclosure.Panel>
            </Disclosure> */} 
        Education
        </div>
        

        </>
    );
    
}

export default Education;
