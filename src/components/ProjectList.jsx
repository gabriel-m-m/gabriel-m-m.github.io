import Project from "./Project"
import projects from "../data/projects"

const ProjectList = () => {
    return (
        <div className="projectlist">
            <h2 className="sectionheading">Projects</h2>
            {projects.map(project =>
                <Project key={project.description} info={project}/>
            )}
        </div>
    )
}

export default ProjectList