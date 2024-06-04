import React from "react";
import projects from "../../../../helpers/ProjectsHelper";

const ProjectsSection: React.FC = () => {

    function renderProjects() {
        return <div className="row ms-auto me-auto">
            {
                projects.map((project, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 rounded-4">
                            <img src={project.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-dark m-1">Github</button>
                                    <button className="btn btn-outline-dark m-1">Live Demo</button>
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
            {
                renderProjects()
            }

        </div>
    )
}

export default ProjectsSection;