import Experience from "./Experience"
import experiences from "../../data/experience"
import "./experiencelist.css"

const ExperienceList = () => {
    return (
        <section id="experience" className="exp-section">
            <h2 className="sectionheading">Experience</h2>
            <div className="exp-list">
                {experiences.map(experience => 
                    <Experience key={experience.startDate} info={experience} />
                )}
            </div>
        </section>
    )
}

export default ExperienceList