const Project = ({ info }) => {
    return (
        <div className="project">
            {info.src ? <img className="logo" src={info.src} alt={info.alt}/> : null}
            <h3>{info.title}</h3>
            <p>{info.description}</p>
        </div>
    )
}

export default Project