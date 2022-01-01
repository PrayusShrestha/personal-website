import json from '../data/resume/resume'
import ProjectListItem from "./ProjectListItem"


function ProjectList() {

    const projects = json.projects;

    return (
        <div>
            <h1>Projects</h1>
            {projects.map(project => {
                return (
                    <div class="resume-section">
                        <ProjectListItem data={project} />
                    </div>
                );
            })}
        </div>



 
    );
}

export default ProjectList;