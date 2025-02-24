import Experience from "./Experience"
import experiences from "../data/experience"

const ExperienceList = () => {
    return (
        <div className="experiencelist">
            <h2 className="sectionheading">Experience</h2>
            {experiences.map(experience => 
                <Experience key={experience.startDate} info={experience} />
            )}
        </div>
    )
}

export default ExperienceList