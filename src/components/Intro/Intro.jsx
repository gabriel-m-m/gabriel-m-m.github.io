import Skills from "./Skills"
import AboutMe from "./AboutMe"
import "./intro.css"

const Intro = () => {
    return (
        <div className="intro">
            <div className="landing">
                <h3>Hi, I&apos;m Gabriel</h3>
                <h1 className="name">Software Developer</h1>
            </div>
            <AboutMe />
            <Skills />
        </div>
    )
}

export default Intro