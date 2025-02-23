import Experience from "./Experience"

const ExperienceList = () => {
    const experiences = [];
    return (
        <div>
            <h2>Experience</h2>
            {experiences.map(experience => 
                <Experience key={experience.startDate} info={experience} />
            )}
        </div>
    )
}

export default ExperienceList