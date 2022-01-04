import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../api/API';
import { fromEntryToLocaleString } from '../../../converters/datetime';
import Loading from '../../Templates/Loading/Loading';
import ModalDialogConfirm from '../../Templates/Modal/ModalDialogConfirm';
import NoItems from '../../Templates/NoItems/NoItems';

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
    }, [navigate]);

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
            if (projectToDelete.id === item.id) {
                item.deleting = !item.deleting;
            }
        });

        setProjects(projectsTemp);

        api.delete(`/projects/${projectToDelete.id}`)
            .then((response) => {
                var index = projectsTemp.indexOf(projectToDelete);
                projectsTemp.splice(index, 1);

                setProjects(projectsTemp);
            }).catch((erros) => {

            }).finally(() => {
                projectToDelete.deleting = false;
            });
    }

    function getStacks(stacks) {
        return (stacks.split(",").map((stack, index) => (
            <span key={index} className="badge bg-secondary ms-1">{stack}</span>
        )))
    }

    function showLoadingOrNoItems() {
        return loading ?
            <Loading loading={loading} /> :
            projects.length === 0 ?
                <NoItems content="There are no published projects yet!" /> :
                null;
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Projects</h5>
                        <Link className="btn btn-primary" to="create">New Projects</Link>
                    </div>
                    <div className="table-responsive">
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
                                        <td className="text-nowrap">{project.title}</td>
                                        <td>{getProjectType(project.type)}</td>
                                        <td className="text-nowrap">{getStacks(project.stacks)}</td>
                                        <td className="text-nowrap">{fromEntryToLocaleString(project.updatedAt)}</td>
                                        <td className="text-nowrap">
                                            <Link className="btn btn-secondary btn-sm" to={project.id}>Edit</Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm ms-2"
                                                disabled={project.deleting}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setProjectToDelete(project);
                                                    setShowModal(true);
                                                }}> {!project.deleting ? "Delete" : "Deleting..."}</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {showLoadingOrNoItems()}
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