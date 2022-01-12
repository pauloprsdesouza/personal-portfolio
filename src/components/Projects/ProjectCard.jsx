import React from 'react';
import { fromEntryToLocaleString } from '../../converters/datetime';

const ProjectCard = function ({ project }) {

    function footerLegend(project) {
        return (
            <>
                <span>
                    Updated at {fromEntryToLocaleString(project.updated_at)}
                </span>
                <span className="ms-3">
                    <i className="fas fa-balance-scale"></i>&nbsp;{project.license.name}
                </span>
                <span className="badge bg-success ms-3">{project.language}</span>
            </>
        )
    }

    function getTopics(project) {
        return (
            project.topics.length > 0 ? (
                <div className="mb-3">
                    {project.topics.map((topic, index) => (
                        <span key={index} className="badge bg-secondary me-1">{topic}</span>
                    ))}
                </div>) : null
        )
    }

    return (
        <div className="card shadow mb-3">
            <div className="card-body">
                <h5 className="card-title">
                    <a className="text-decoration-none text-dark" href={project.html_url} target="_blank">{project.name}</a>
                </h5>
                <h6 className="card-subtitle mb-2">
                    {project.description}
                </h6>
                <div className="row">
                    <div className="col-lg-9 order-lg-0 order-1">
                        {getTopics(project)}
                        <div className="text-secondary">
                            {footerLegend(project)}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectCard;