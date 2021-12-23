import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';

const CreatePaper = function () {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [submissionDeadline, setSubmissionDeadline] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [local, setLocal] = useState("");
    const [url, setUrl] = useState("");
    const [qualis, setQualis] = useState("");
    const formPost = useRef();
    const [isFormValid, setIsFormValid] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/papers/${id}`)
            .then((response) => {
                const paper = response.data;

                setTitle(paper.title);
                setSubmissionDeadline(paper.submissionDeadline);
                setType(paper.type);
                setQualis(paper.qualis);
                setPrice(paper.price);
                setLocal(paper.local);
                setUrl(paper.url);
            }).catch((error) => {

            }).finally(() => {
                setLoading(false);
            });
    }, [id]);

    function save(event) {
        event.preventDefault();

        const paper = {
            title,
            submissionDeadline,
            type,
            qualis,
            price,
            local,
            url
        }

        if (id) {
            setLoading(true);

            api.put(`/papers/${id}`, paper)
                .then((response) => {
                    navigate("/admin/papers")

                }).catch((error) => {

                }).finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(true);

            api.post("/papers", paper)
                .then((response) => {
                    navigate("/admin/papers")

                }).catch((error) => {

                }).finally(() => {
                    setLoading(false);
                });
        }
    }

    function validateForm() {
        setIsFormValid(formPost.current.checkValidity());
    }

    function loadingText() {
        return loading ? (
            <span>
                <i className="fas fa-spinner fa-pulse"></i>&nbsp;
                Saving...
            </span>) : "Save";
    }

    return (
        <div className="container mt-3">
            <form ref={formPost} className="needs-validation was-validated" onSubmit={save} onChange={validateForm} noValidate>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title mb-4"><h1>New Post</h1></div>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        className="form-control"
                                        required
                                        value={title}
                                        onChange={(event) => {
                                            setTitle(event.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Field title is required.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="mb-3">
                                    <label className="form-label">Submission Deadline</label>
                                    <input
                                        className="form-control"
                                        required
                                        value={submissionDeadline}
                                        onChange={(event) => {
                                            setSubmissionDeadline(event.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Field subtitle is required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mb-3">
                                    <label className="form-label">Type</label>
                                    <select
                                        value={type}
                                        required
                                        className="form-select"
                                        onChange={(event) => {
                                            setType(event.target.value);
                                        }}
                                    >
                                        <option value="">Select</option>
                                        <option value="J">Journal</option>
                                        <option value="C">Conference</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Field type is required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mb-3">
                                    <label className="form-label">Qualis</label>
                                    <select
                                        value={qualis}
                                        required
                                        className="form-select"
                                        onChange={(event) => {
                                            setQualis(event.target.value);
                                        }}
                                    >
                                        <option value="">Select</option>
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="A3">A3</option>
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="B3">B3</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Field post content is required.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Local</label>
                                    <input
                                        className="form-control"
                                        required
                                        value={local}
                                        onChange={(event) => {
                                            setLocal(event.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Field local is required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control"
                                        required
                                        value={price}
                                        onChange={(event) => {
                                            setPrice(event.target.value);
                                        }} />
                                </div>
                                <div className="invalid-feedback">
                                    Field price time is required.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Website URL</label>
                                    <input
                                        className="form-control"
                                        required
                                        value={url}
                                        onChange={(event) => {
                                            setUrl(event.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Field url is required.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-end">
                        <button type="submit" disabled={loading || !isFormValid} className="btn btn-primary">
                            {loadingText()}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePaper;