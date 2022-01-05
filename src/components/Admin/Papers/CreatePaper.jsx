import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../api/API';

const CreatePaper = function () {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [title, setTitle] = useState("");
    const [submissionDeadline, setSubmissionDeadline] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [place, setPlace] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [qualis, setQualis] = useState("");
    const formPost = useRef();
    const [isFormValid, setIsFormValid] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setLoading(true);

            api.get(`/papers/${id}`)
                .then((response) => {
                    const paper = response.data;

                    setTitle(paper.title);
                    setSubmissionDeadline(paper.submissionDeadline);
                    setType(paper.type);
                    setQualis(paper.qualis);
                    setPrice(paper.price);
                    setPlace(paper.place);
                    setWebsiteUrl(paper.websiteUrl);
                }).catch((error) => {
                    setLoading(false);
                    navigate("/login");
                }).finally(() => {
                    setLoading(false);
                });
        }
    }, [id, navigate]);

    function save(event) {
        event.preventDefault();

        const paper = {
            title,
            submissionDeadline,
            type,
            qualis,
            price,
            place,
            websiteUrl
        }

        setSaving(true);

        if (id) {
            api.put(`/papers/${id}`, paper)
                .then((response) => {
                    navigate("/admin/papers")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        } else {
            api.post("/papers", paper)
                .then((response) => {
                    navigate("/admin/papers")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        }
    }

    function validateForm() {
        setIsFormValid(formPost.current.checkValidity());
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
            <form ref={formPost} className="needs-validation was-validated" onSubmit={save} onChange={validateForm} noValidate>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title mb-4"><h1>New Paper</h1></div>
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
                        <div className="row mb-3">
                            <div className="col-lg-4">
                                <label className="form-label">Submission Deadline</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    value={submissionDeadline}
                                    onChange={(event) => {
                                        setSubmissionDeadline(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field submission deadline is required.
                                </div>
                            </div>
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
                                    <option value="J">Journal</option>
                                    <option value="C">Conference</option>
                                </select>
                                <div className="invalid-feedback">
                                    Field type is required.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Qualis</label>
                                <select
                                    value={qualis}
                                    required
                                    className="form-select"
                                    onChange={(event) => {
                                        setQualis(event.target.value);
                                    }}
                                    disabled={loading}
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
                        <div className="row mb-3">
                            <div className="col-lg-6">
                                <label className="form-label">Place</label>
                                <input
                                    className="form-control"
                                    required
                                    value={place}
                                    onChange={(event) => {
                                        setPlace(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field place is required.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">Website URL</label>
                                <input
                                    className="form-control"
                                    required
                                    value={websiteUrl}
                                    onChange={(event) => {
                                        setWebsiteUrl(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field url is required.
                                </div>
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

export default CreatePaper;