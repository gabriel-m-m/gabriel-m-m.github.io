import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import ProjectList from "./components/ProjectList/ProjectList"
import ExperienceList from "./components/ExperienceList/ExperienceList"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <ProjectList />
      <ExperienceList />
      <Education />
      <Footer />
    </div>
  )
}

export default App
