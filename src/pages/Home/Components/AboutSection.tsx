import React from "react";

const AboutSection: React.FC = () => {
    return (
        <div className="my-5" id="about">
            <div className="text-center ">
                <span className="lead">Get To Know More</span>
                <h1 className="mb-5">About Me</h1>
            </div>

            <div className="d-flex justify-content-center container">
                <div className="me-3">
                    <img src="https://portfolio-personal-files.s3.amazonaws.com/profile-gray-scale.png" width="450" />
                </div>
                <div>
                    <div className="row text-center">
                        <div className="card col m-2 rounded-4">
                            <div className="card-body">
                                <i className="fa-solid fa-award fa-2x"></i>
                                <div className="card-text">
                                    <h2>Experience</h2>
                                    10+ years Full Stack Web Development
                                </div>
                            </div>
                        </div>
                        <div className="card col m-2 rounded-4">
                            <div className="card-body">
                            <i className="fa-solid fa-graduation-cap fa-2x"></i>
                                <h2>Education</h2>
                                PhD. and MSc. in Computer Science. Recommender System Expert
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <p className="lead" style={{textAlign:"justify"}}>A highly motivated full-stack web and mobile developer with over 10 years of experience, specializing in innovative application development using advanced technologies. Proficient in frontend, backend, mobile, and cloud technologies, with extensive experience across public security and finance sectors. Skilled in microservices architecture, machine learning, and DevOps practices to enhance user experiences and deliver high-quality software. Experienced in academic research, contributing to high-impact journals and conferences, and holds advanced degrees in Computer Science and Business Analytics.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;