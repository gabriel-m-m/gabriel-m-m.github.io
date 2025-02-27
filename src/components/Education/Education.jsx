import "./education.css"

const Education = () => {
    return (
        <div className="edu-section">
            <h2 className="sectionheading">Education</h2>
            <div className="edu">
                {/* <div className="UBCsidebar">
                    <div className="UBCline"></div> */}
                    <div className="UBCcontainer">
                        <img className="UBClogo" src="src\\assets\\UBC_Logo.png" />
                    </div>
               
                <div className="edu-text">
                    <h3>Bachelor of Science, Computer Science</h3>
                    <h4>University of British Columbia, GPA: 4.33/4.33</h4>
                    <p>2021 - present</p>
                    <p>Coursework: Software Engineering, Data Structures & Algorithms, Relational Databases, Machine Learnin, Operating Systems, Computer Hardware, Algorithm Design & Analysis </p>
                </div>
            </div>
        </div>
    )
}

export default Education