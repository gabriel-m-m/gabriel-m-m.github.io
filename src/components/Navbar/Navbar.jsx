import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
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