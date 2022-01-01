import Education from "./Education";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";

function ResumeSection(props) {
    const section = props.section; 
    let element; 
    switch (section) {
        case "Education":
            element = <Education />;
            break;
        case "Work Experience": 
            element = <ExperienceList type="Work"/>;
            break;
        case "Additional Experience": 
            element = <ExperienceList type="Additional"/>;
            break;
        default:
            element = <ProjectList />;
    }
    return ( 
        <div>{element}</div>
     );
}

export default ResumeSection;