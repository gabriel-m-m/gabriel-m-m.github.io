import "./education.css"

const Education = () => {
    return (
        <section id="education" className="edu-section">
            <h2 className="sectionheading">Education</h2>
            <div className="edu animate">
                <div className="UBCcontainer">
                    <img height="320" width="320" className="UBClogo" alt="UBC logo" src="images/UBC_Logo.png" />
                </div>
                <div className="edu-text">
                    <h3>Bachelor of Science, Computer Science</h3>
                    <h4>University of British Columbia</h4>
                    <p>GPA: 4.33/4.33</p>
                    <i>2021 - present (4th year)</i>
                    <i className="courses">Coursework: </i>
                    <p>Software Engineering, Data Structures & Algorithms, Relational Databases, Machine Learning, Operating Systems, Computer Hardware, Algorithm Design & Analysis</p>
                </div>
            </div>
        </section>
    )
}

export default Education