import Project from "./Project"
import projects from "../../data/projects"
import "./projectlist.css"

const ProjectList = () => {
    return (
        <section className="proj-section">
            <h2 className="sectionheading">Projects</h2>
            <div className="proj-list">
                {projects.map(project =>
                    <Project key={project.description} info={project}/>
                )}
            </div>
        </section>
    )
}

export default ProjectList