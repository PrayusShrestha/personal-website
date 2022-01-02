import ExperienceListItem from "./ExperienceListItem";
import json from "../data/resume/resume";

function ExperienceList(props) {
    const title = props.type;
    // console.log(json["experiences"]);
    const experiences = json.experiences.filter((experience) => { return experience.type == title; });
    return (
        <div class="resume-section">
            <h1>{title}</h1>
            {experiences.map(experience => {
                return (
                    <div class="resume-section">
                        <ExperienceListItem data={experience} />
                    </div>
                );
            })}
        </div>



 
    );
}

export default ExperienceList;