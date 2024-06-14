import React from "react";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import ProjectsSection from "./Components/ProjectsSection";
import "../../App.css";
import ExperienceSection from "./Components/ExperiencesSection";

const Home: React.FC = () => {
    return (
        <>
            <div className="d-flex vh-100 justify-content-center">
                <div className="row align-content-center">
                    <div className="col-lg-4 mb-lg-0 mb-4 p-5 p-lg-0">
                        <img
                            src="https://portfolio-personal-files.s3.amazonaws.com/profile.png"
                            className="img-fluid vh-25"
                            alt="Profile"
                        />
                    </div>
                    <div className="col-lg-8 text-center">
                        <h6>Hello, I'm</h6>
                        <h1>Paulo Roberto</h1>
                        <h5 className="mb-4">
                            Full Stack Web Developer | Data Scientist
                        </h5>
                        <div className="d-flex justify-content-between mb-2">
                            <a className="btn btn-outline-dark flex-fill m-1" href="https://portfolio-personal-files.s3.amazonaws.com/Paulo_Souza_Resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                            <a className="btn btn-dark flex-fill m-1" href="#contact">
                                Contact Info
                            </a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a className="btn btn-link text-dark" href="https://www.linkedin.com/in/pauloprsdesouza/" target="_blank">
                                <i className="fa-brands fa-linkedin fa-3x"></i>
                            </a>
                            <a className="btn btn-link text-dark" href="https://github.com/pauloprsdesouza" target="_blank">
                                <i className="fa-brands fa-square-github fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}

export default Home;