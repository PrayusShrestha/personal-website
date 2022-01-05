import json from '../data/resume/resume'
import ProjectListItem from "./ProjectListItem"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Disclosure, Transition } from '@headlessui/react';

function ProjectList() {

    const projects = json.projects;
    const [arrowDir, setArrowDir] = useState(-1);

    return (
        <div id="Projects" class="resume-heading my-10 border-payne_grey hover:border-oxford_blue hover:shadow-inner">
                <div className="inline mx-auto font-extrabold text-xl text-center text-oxford_blue">
                    <h1 id=""className="">
                        Projects 
                    </h1>
                </div>
                
                <div>
                    {projects.map(project => {
                        return (
                            <div>
                                <ProjectListItem data={project} />
                            </div>
                        );
                    })}
                </div>
        </div>  
 
    );
}

export default ProjectList;