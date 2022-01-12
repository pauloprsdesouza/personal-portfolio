import React, { useEffect, useState } from 'react';
import apiGit from '../../api/API';
import NoItems from '../Templates/NoItems/NoItems';
import HorizontalCardSkeleton from '../Templates/Skeleton/HorizontalCardSkeleton';
import ProjectCard from './ProjectCard';

const Projects = function () {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGit.get("/repos")
            .then((response) => {
                setProjects(response.data);
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    function showLoading() {
        return loading ?
            <HorizontalCardSkeleton /> : (
                projects.length === 0 ?
                    <NoItems content="It was not possible to find projects for this search." /> :
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