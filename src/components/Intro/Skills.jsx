import "./skills.css"

const Skills = () => {
    const technologies = ["TypeScript", "JavaScript", "HTML", "CSS", "React","Git", "C#", "Python","C/C++", "SQL", "Java"];

    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="technologies">
                {technologies.map(tech =>
                    <div key={tech} className="technology">{tech}</div>
                )}
            </div>
            <span>{"and I'm always eager to learn more :)"}</span>
        </div>
    )
}

export default Skills
