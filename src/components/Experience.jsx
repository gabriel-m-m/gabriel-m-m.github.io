const Experience = ({ info }) => {
    return (
        <div className="experience">
            <div className="logocontainer" style={{backgroundColor: info.logobg}}>{info.logo ? <img className="logo" src={info.logo}/> : null}</div>
            <div>
                <h3>{info.title}, {info.company}</h3>
                <p>{info.startDate} - {info.endDate}</p>
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