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

    const Scroll = require('react-scroll');
    const Element = Scroll.Element;


    return (

            <div id={title} class="resume-heading my-10 border-payne_grey hover:border-oxford_blue hover:shadow-lg" >
                <div className="text-center">
                    <h1 className="inline mx-auto font-extrabold text-xl text-oxford_blue">
                        {title} 
                    </h1>
                </div>
                {experiences.map(experience => {
                    return (
                        <div class="">
                            <ExperienceListItem data={experience} />
                        </div>
                    );
                })}
            </div>

    );
}

export default ExperienceList;