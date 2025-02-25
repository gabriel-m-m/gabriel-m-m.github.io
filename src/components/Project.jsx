const Project = ({ info }) => {
    return (
        <div className="project">
            {info.thumbnail ? <div className="thumbnailcontainer"><img className="thumbnail" src={info.thumbnail}/></div> : null}
            <h3 className="projecttitle">{info.title}</h3>
            <p>{info.description}</p>
            <div className="technologies">
                {info.technologies.map(tech => <div key={tech} className="technology">{tech}</div>)}
            </div>
        </div>
    )
}

export default Project