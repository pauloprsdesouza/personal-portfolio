import React from 'react';

const ProjectCard = function ({ project }) {
    function getProjectType() {
        switch (project.type) {
            case "F":
                return <span className="badge bg-primary">Frontend</span>

            case "B":
                return <span className="badge bg-success">Backend</span>

            default:
                break;
        }
    }

    function getStacks() {
        return (project.stacks.split(",").map((stack, index) => (
            <span key={index} className="badge bg-secondary ms-1">{stack}</span>
        )))
    }


    return (
        <div className="card shadow mb-3">
            <div className="card-body">
                <h3 className="card-title">
                    {project.title}
                </h3>
                <div className="row">
                    <div className="col-9">
                        <p className="card-text">{project.description}</p>
                        <div className="mb-3">
                            {getStacks()}
                        </div>
                    </div>
                    <div className="col-3 text-end">
                        <div className="mb-3">
                            {getProjectType()}
                        </div>
                    </div>
                </div>

                <a
                    href={project.urlProject}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i class="fab fa-github-alt"></i> See on Github
                </a>
            </div>
        </div >
    )
}

export default ProjectCard;