import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';
import { fromEntryToLocaleString } from '../../../converters/datetime';
import ModalDialogConfirm from '../../Modal/ModalDialogConfirm';

const ListProjects = function () {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [projectToDelete, setProjectToDelete] = useState({});
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        api.get("/projects")
            .then((response) => {
                setProjects(response.data.projects);
            })
            .catch((erros) => {
                navigate("/login");
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    function getProjectType(type) {
        switch (type) {
            case "F":
                return <span className="badge bg-warning">Frontend</span>

            case "B":
                return <span className="badge bg-secondary">Backend</span>

            default:
                break;
        }
    }

    function deleteProject() {
        const projectsTemp = [...projects];

        projectsTemp.forEach((item) => {
            if (projectToDelete.id == item.id) {
                item.deleting = item.deleting;
            }
        });

        setProjects(projectsTemp);

        api.delete(`/projects/${projectToDelete.id}`)
            .then((response) => {
                updateProjectByResponse(response.data);
            }).catch((erros) => {
                console.error(erros);
            }).finally(() => {
                projectToDelete.deleting = false;
            });
    }

    function updateProjectByResponse(postResponse) {
        const projectsTemp = [...projects];

        projectsTemp.forEach((post) => {
            if (postResponse.id === post.id) {
                post.status = postResponse.status;
            }
        });

        setProjects(projectsTemp);
    }

    function getStacks(stacks) {
        return (stacks.split(",").map((stack, index) => (
            <span key={index} className="badge bg-secondary ms-1">{stack}</span>
        )))
    }

    function showLoading() {
        return loading ? (
            <tfoot>
                <tr className="text-center">
                    <td colspan="5"> <i className="fas fa-spinner fa-pulse"></i>&nbsp;Loading...</td>
                </tr>
            </tfoot>
        ) : "";
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Projects</h5>
                        <Link className="btn btn-primary" to="create">New Projects</Link>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Stacks</th>
                                <th>Updated At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td>{project.title}</td>
                                    <td>{getProjectType(project.type)}</td>
                                    <td>{getStacks(project.stacks)}</td>
                                    <td>{fromEntryToLocaleString(project.updatedAt)}</td>
                                    <td>
                                        <Link className="btn btn-secondary btn-sm" to={project.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm ms-2" onClick={(event) => {
                                            event.preventDefault();
                                            setProjectToDelete(project);
                                            setShowModal(true);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {showLoading()}
                    </table>
                </div>
            </div>
            <ModalDialogConfirm
                title="Delete Post"
                content={`Do you mean to delete the post ${projectToDelete.title}`}
                show={showModal}
                close={setShowModal}
                confirm={deleteProject}
            />
        </div>
    )
}

export default ListProjects;