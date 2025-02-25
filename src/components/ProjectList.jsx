import Project from "./Project"
import projects from "../data/projects"

const ProjectList = () => {
    return (
        <div className="projectsection">
            <h2 className="sectionheading">Projects</h2>
            <div className="projectlist">
                {projects.map(project =>
                    <Project key={project.description} info={project}/>
                )}
            </div>
        </div>
    )
}

export default ProjectList