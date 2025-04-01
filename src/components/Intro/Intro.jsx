import Skills from "./Skills"
import AboutMe from "./AboutMe"
import "./intro.css"

const Intro = () => {
    return (
        <section className="intro">
            <AboutMe />
            <Skills />
        </section>
    )
}

export default Intro