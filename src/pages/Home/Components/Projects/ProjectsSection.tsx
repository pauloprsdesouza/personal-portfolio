import React from "react";
import projects from "../../../../helpers/ProjectsHelper";

const ProjectsSection: React.FC = () => {

    const RenderProjects = () => {
        return <div className="row justify-content-center">
            {
                projects.map((project, index) => (
                    <div className="col-lg-3 col-12 mb-lg-0 mb-3" key={index}>
                        <div className="card rounded-4 shadow-sm border-0" >
                            <img src={project.image} className="card-img-top mb34" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-4">{project.name}</h5>
                                <div className="btn-group">
                                    <a className="btn btn-outline-dark btn-sm" href={project.github} target="_blank">Github</a>
                                    <a className="btn btn-outline-dark btn-sm" href={project.liveDemoLink} target="_blank">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    }

    return (
        <div className="text-center my-5 container" id="projects">
            <span className="lead">Browse My Recent</span>
            <h1 className="mb-5">Projects</h1>

            <RenderProjects />
        </div>
    )
}

export default ProjectsSection;