import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import api from '../../api/API';
import NoItems from '../Templates/NoItems/NoItems';
import HorizontalCardSkeleton from '../Templates/Skeleton/HorizontalCardSkeleton';
import ProjectCard from './ProjectCard';

const Projects = function () {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/projects")
            .then((response) => {
                setProjects(response.data.projects);
            }).catch((error) => {

            }).finally(() => {
                setLoading(false);
            });
    });

    function showLoading() {
        return loading ?
            <HorizontalCardSkeleton /> : (
                projects.length === 0 ?
                    <NoItems content="There are no published papers yet!" /> :
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
            )
    }

    return (
        <div className="container">
            <div className="card card-education-teste mt-3 mb-3 shadow">
                <div className="card-body">
                    <h1 className="card-title text-white">Projects</h1>
                    <p className="card-text text-white">Here, you will find projects that I developed a long of the yars.</p>
                </div>
            </div>

            {showLoading()}
        </div>
    )
}

export default Projects;