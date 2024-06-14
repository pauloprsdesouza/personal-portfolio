import React from "react";
import { ProjectModel } from "./Models/ProjectModel";
import { ReactOriginal, AngularjsOriginal, VuejsOriginal  } from 'devicons-react';

const ProjectsComponent: React.FC<ProjectModel> = ({ ...project }) => {
    return (
        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
            <div className="card rounded-4 shadow-sm border-0" >
                <img src={project.image} className="card-img-top mb34" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-4">{project.name}</h5>
                    <a className="btn btn-outline-dark btn-sm mb-4" href={project.github} target="_blank">See the code on Github</a>
                    <div>
                        <h6>Live Demo</h6>
                        <div className="">
                            <a className="btn btn-dark btn-sm m-1" href={project.github} target="_blank">React <ReactOriginal /></a>
                            <a className="btn btn-dark btn-sm m-1" href={project.liveDemoLink} target="_blank">Angular <AngularjsOriginal /></a>
                            <a className="btn btn-dark btn-sm m-1" href={project.liveDemoLink} target="_blank">Vue <VuejsOriginal /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsComponent;