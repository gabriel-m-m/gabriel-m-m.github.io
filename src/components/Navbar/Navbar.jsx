import "./navbar.css"
import { useState, useEffect } from "react";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [hide, setHide] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    })
    
    const onScroll = () => {
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setHide(true)
        } else {
            setHide(false)
        }
    
        setPrevScrollPos(currentScrollPos)
    }

    return (
        <nav style={ window.scrollY > 3 ? { top: hide ? '-4rem' : '0'} : {}} >
            <div id="navbar" className="container">
                <div className="icon-placeholder"></div>
                <a href="#home">home</a>
                <a href="#projects">projects</a>
                <a href="#experience">experience</a>
                <a href="#education">education</a>
            </div>
        </nav>
    )
}

export default Navbar