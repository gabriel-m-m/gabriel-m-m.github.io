import "./experience.css"

const Experience = ({ info }) => {
    return (
        <div className="exp">
            <div className="exp-header">
                <div className="logocontainer" style={{backgroundColor: info.logobg}}>{info.logo ? <img className="logo" src={info.logo}/> : null}</div>
                <div>
                    <h3>{info.title}</h3>
                    <h4>{info.company}</h4>
                    <p>{info.startDate} – {info.endDate}</p>
                </div>
            </div>
            <div>
                <ul>
                    {info.responsibilities.map(resp => 
                        <li key={resp}>{resp}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Experience