import ExperienceListItem from "./ExperienceListItem";
import json from "../data/resume/resume";
import { Disclosure, Transition } from '@headlessui/react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../App.css';

function ExperienceList(props) {
    const title = props.type;
    const experiences = json.experiences.filter((experience) => { return experience.type == title; });
    const [arrowDir, setArrowDir] = useState(-1);

    const handleClick = () => {
        setArrowDir(arrowDir * -1);
    }

    return (
        // <div class="resume-heading">
        //     <Disclosure>
        //         <div onClick={handleClick}>
        //             <Disclosure.Button className="w-full m-auto">
        //                 <div className="inline float-left">
        //                     <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
        //                 </div>

        //                 <h1 className="inline">
        //                     {title} 
        //                 </h1>
                        
        //                 <div className="inline float-right">
        //                     <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
        //                 </div>
        //             </Disclosure.Button>
        //         </div>
        //         <Transition
        //             enter="transition duration-200 ease-in"
        //             enterFrom="transform scale-95 opacity-0"
        //             enterTo="transform scale-100 opacity-100"
        //             leave="transition duration-200 ease-out"
        //             leaveFrom="transform scale-100 opacity-100"
        //             leaveTo="transform scale-95 opacity-0"
        //         >
        //         <Disclosure.Panel className="text-black-500">
        //             {experiences.map(experience => {
        //                 return (
        //                     <div class="resume-section">
        //                         <ExperienceListItem data={experience} />
        //                     </div>
        //                 );
        //             })}
        //         </Disclosure.Panel>
        //         </Transition>
        //     </Disclosure>
        // </div>

        <div class="resume-heading my-10 border-payne_grey hover:border-oxford_blue hover:shadow-inner">
                <div className="text-center">
                        {/* <div className="inline float-left">
                            <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
                        </div> */}

                        <h1 className="inline mx-auto font-extrabold text-xl text-oxford_blue">
                            {title} 
                        </h1>
                        
                        {/* <div className="inline float-right">
                            <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
                        </div> */}
                </div>
                    {experiences.map(experience => {
                        return (
                            <div class="">
                                <ExperienceListItem data={experience} />
                            </div>
                        );
                    })}
        </div>

        // <div class="border m-4 relative">
        //         <div onClick={handleClick}>
        //                 <h1 className="inline pr-4">
        //                     title
        //                 </h1>
        //                 | 
        //                 <div className="inline pl-4">
        //                     <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
        //                 </div>
        //          </div>
                
        //         <div>
        //             {experiences.map(experience => {
        //                 return (
        //                     <div class="">
        //                         <ExperienceListItem data={experience} />
        //                     </div>
        //                 );
        //             })}
        //         </div>

        // </div>



 
    );
}

export default ExperienceList;