import Experience from "./Experience"
import experiences from "../data/experience"

const ExperienceList = () => {
    return (
        <div className="experiencesection">
            <h2 className="sectionheading">Experience</h2>
            <div className="experiencelist">
                {experiences.map(experience => 
                    <Experience key={experience.startDate} info={experience} />
                )}
            </div>
        </div>
    )
}

export default ExperienceList