import React from "react";
import projects from "../../../../helpers/ProjectsHelper";

const ProjectsSection: React.FC = () => {

    function renderProjects() {
        return <div className="row ms-auto me-auto">
            {
                projects.map((project, index) => (
                    <div className="col" key={index}>
                        <div className="card rounded-4" style={{width: 300}}>
                            <img src={project.image} className="card-img-top mb-4" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title mb-4">{project.name}</h5>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-outline-dark m-1 btn-sm" href={project.github} target="_blank">Github</a>
                                    <a className="btn btn-outline-dark m-1 btn-sm" href={project.liveDemoLink} target="_blank">Live Demo</a>
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
            <div className="card-group">
            {
                renderProjects()
            }
            </div>
        </div>
    )
}

export default ProjectsSection;