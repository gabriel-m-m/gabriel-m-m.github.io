const Experience = ({ info }) => {
    return (
        <div className="experience">
            {info.logo ? <img src={info.logo}/> : null}
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