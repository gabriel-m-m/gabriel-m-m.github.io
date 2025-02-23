import Project from "./Project"

const ProjectList = () => {
    const projects = [];
    return (
        <div>
            <h2>Projects</h2>
            {projects.map(project =>
                <Project key={project.description} info={project}/>
            )}
        </div>
    )
}

export default ProjectList