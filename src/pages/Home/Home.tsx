import React from "react";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/Projects/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import "../../App.css";
import ExperienceSection from "./Components/Experiences/ExperienceSection";

const Home: React.FC = () => {
    return (
        <>
            <div className="d-flex vh-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center flex-row align-items-center">
                    <div className="m-4">
                        <img
                            src="https://portfolio-personal-files.s3.amazonaws.com/profile.png"
                            width="300"
                            alt="Profile"
                        />
                    </div>
                    <div className="text-center m-4">
                        <h6>Hello, I'm</h6>
                        <h1>Paulo Roberto</h1>
                        <h5 className="mb-4">
                            Full Stack Web Developer | Data Scientist
                        </h5>
                        <div className="d-flex justify-content-between mb-2">
                            <button className="btn btn-outline-dark flex-fill m-1">
                                Download CV
                            </button>
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