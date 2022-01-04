import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../api/API';

const CreateProject = function () {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const formProject = useRef();
    const [isFormValid, setIsFormValid] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [stacks, setStacks] = useState("");
    const [urlProject, setUrlProject] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (id) {
            setLoading(true);

            api.get(`/projects/${id}`)
                .then((response) => {
                    const project = response.data;

                    setTitle(project.title);
                    setType(project.type);
                    setStacks(project.stacks)
                    setUrlProject(project.urlProject);
                    setDescription(project.description);

                }).catch((error) => {
                    navigate("/login");
                }).finally(() => {
                    setLoading(false);
                });
        }
    }, [id, navigate]);

    function save(event) {
        event.preventDefault();

        const project = {
            title,
            type,
            stacks,
            urlProject,
            description
        }

        setSaving(true);

        if (id) {
            api.put(`/projects/${id}`, project)
                .then((response) => {
                    navigate("/admin/projects")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        } else {
            api.post("/projects", project)
                .then((response) => {
                    navigate("/admin/projects")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        }
    }

    function validateForm() {
        setIsFormValid(formProject.current.checkValidity());
    }

    function savingText() {
        return saving ? (
            <span>
                <i className="fas fa-spinner fa-pulse"></i>&nbsp;
                Saving...
            </span>) : "Save";
    }

    return (
        <div className="container mt-3">
            <form ref={formProject} className="needs-validation was-validated" onSubmit={save} onChange={validateForm} noValidate>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title mb-4"><h1>New Project</h1></div>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                className="form-control"
                                required
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                                disabled={loading}
                            />
                            <div className="invalid-feedback">
                                Field title is required.
                            </div>
                        </div>
                        <div className="row gy-3 mb-3">
                            <div className="col-lg-4">
                                <label className="form-label">Type</label>
                                <select
                                    value={type}
                                    required
                                    className="form-select"
                                    onChange={(event) => {
                                        setType(event.target.value);
                                    }}
                                    disabled={loading}
                                >
                                    <option value="">Select</option>
                                    <option value="F">Frontend</option>
                                    <option value="B">Backend</option>
                                </select>
                                <div className="invalid-feedback">
                                    Field type is required.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Url Project GetHub</label>
                                <input
                                    className="form-control"
                                    required
                                    value={urlProject}
                                    onChange={(event) => {
                                        setUrlProject(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field url is required.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Programing Language</label>
                                <input
                                    className="form-control"
                                    required
                                    value={stacks}
                                    onChange={(event) => {
                                        setStacks(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field programing languages is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="10"
                                cols="10"
                                required
                                value={description}
                                onChange={(event) => {
                                    setDescription(event.target.value);
                                }}
                                disabled={loading}
                            />
                            <div className="invalid-feedback">
                                Field description is required.
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-end">
                        <button type="submit" disabled={saving || !isFormValid} className="btn btn-primary">
                            {savingText()}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;