import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import ProjectList from "./components/ProjectList/ProjectList"
import ExperienceList from "./components/ExperienceList/ExperienceList"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/Footer"

import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    })  

	  const allAnimatedElements = document.querySelectorAll('.animate');
	  allAnimatedElements.forEach((element) => observer.observe(element));
  })


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
