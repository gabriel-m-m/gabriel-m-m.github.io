import Skills from "./Skills"
import AboutMe from "./AboutMe"
import "./intro.css"

const Intro = () => {
    return (
        <section id="home" className="intro">
            <AboutMe />
            <Skills />
        </section>
    )
}

export default Intro