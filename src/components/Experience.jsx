const Experience = ({ info }) => {
    return (
        <div>
            <h3>{info.title}, {info.company}</h3>
            <p>{info.startDate} - {info.endDate}</p>
            <ul>
                {info.responsibilities.map(resp => 
                    <li key={resp}>{resp}</li>
                )}
            </ul>
        </div>
    )
}

export default Experience