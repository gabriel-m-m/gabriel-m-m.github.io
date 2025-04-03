import Project from "./Project"
import projects from "../../data/projects"
import "./projectlist.css"

const ProjectList = () => {
    return (
        <section id="projects" className="proj-section">
            <h2 className="sectionheading">Projects</h2>
            <div className="proj-list">
                {projects.map(project =>
                    <Project key={project.title} info={project}/>
                )}
            </div>
        </section>
    )
}

export default ProjectList