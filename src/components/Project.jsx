const Project = ({ info }) => {
    return (
        <div>
            <img src={info.src} alt={info.alt}/>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
        </div>
    )
}

export default Project