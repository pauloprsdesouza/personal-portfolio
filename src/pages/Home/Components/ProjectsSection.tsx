import React from "react";
import projects from "../../../helpers/ProjectsHelper";
import ProjectsComponent from "./Projects/ProjectsComponent";

const ProjectsSection: React.FC = () => {
    return (
        <div className="text-center my-5 container" id="projects">
            <span className="lead">Browse My Recent</span>
            <h1 className="mb-5">Projects</h1>

            <div className="row justify-content-center">
                {
                    projects.map((project, index) => (
                        <ProjectsComponent {...project} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectsSection;