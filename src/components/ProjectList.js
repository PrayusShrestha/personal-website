import json from '../data/resume/resume'
import ProjectListItem from "./ProjectListItem"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Disclosure, Transition } from '@headlessui/react';

function ProjectList() {

    const projects = json.projects;
    const [arrowDir, setArrowDir] = useState(-1);

    const handleClick = () => {
        setArrowDir(arrowDir * -1);
    }
    return (
        <div class="resume-heading">
            <Disclosure>
                <div onClick={handleClick}>
                    <Disclosure.Button className="w-full m-auto">
                        <h1 className="inline pr-4">
                            Projects 
                        </h1>
                        |
                        <div className="inline pl-4">
                            <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
                        </div>
                    </Disclosure.Button>
                </div>
                <Transition
                    enter="transition duration-200 ease-in"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                <Disclosure.Panel className="text-gray-500">
                    {projects.map(project => {
                        return (
                            <div class="resume-section">
                                <ProjectListItem data={project} />
                            </div>
                        );
                    })}
                </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>  
 
    );
}

export default ProjectList;