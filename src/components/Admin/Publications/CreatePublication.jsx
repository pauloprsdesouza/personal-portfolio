import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../api/API';

const CreatePublication = function () {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const formPublication = useRef();
    const [isFormValid, setIsFormValid] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [abstract, setAbstract] = useState("");
    const [publisher, setPublisher] = useState("");
    const [year, setYear] = useState("");
    const [volume, setVolume] = useState("");
    const [page, setPage] = useState("");
    const [qualis, setQualis] = useState("");
    const [urlPublication, setUrlPublication] = useState("");

    useEffect(() => {
        if (id) {
            setLoading(true);

            api.get(`/publications/${id}`)
                .then((response) => {
                    const publication = response.data;

                    setTitle(publication.title);
                    setType(publication.type);
                    setAbstract(publication.abstract)
                    setPublisher(publication.publisher);
                    setYear(publication.year);
                    setVolume(publication.volume);
                    setPage(publication.page);
                    setQualis(publication.qualis);
                    setUrlPublication(publication.urlPublication);

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
            abstract,
            publisher,
            year,
            volume,
            page,
            qualis,
            urlPublication
        }

        setSaving(true);

        if (id) {
            api.put(`/publications/${id}`, project)
                .then((response) => {
                    navigate("/admin/publications")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        } else {
            api.post("/publications", project)
                .then((response) => {
                    navigate("/admin/publications")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        }
    }

    function validateForm() {
        setIsFormValid(formPublication.current.checkValidity());
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
            <form ref={formPublication} className="needs-validation was-validated" onSubmit={save} onChange={validateForm} noValidate>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title mb-4"><h1>New Publication</h1></div>
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
                        <div className="mb-3">
                            <label className="form-label">Abstract</label>
                            <textarea
                                className="form-control"
                                rows="6"
                                cols="10"
                                required
                                value={abstract}
                                onChange={(event) => {
                                    setAbstract(event.target.value);
                                }}
                                disabled={loading}
                            />
                            <div className="invalid-feedback">
                                Field abstract is required.
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-lg-4">
                                <label className="form-label">Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    required
                                    value={year}
                                    onChange={(event) => {
                                        setYear(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field year is required.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Volume</label>
                                <input
                                    className="form-control"
                                    value={volume}
                                    onChange={(event) => {
                                        setVolume(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field volume is required.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Page</label>
                                <input
                                    className="form-control"
                                    value={page}
                                    onChange={(event) => {
                                        setPage(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field page is required.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
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
                                    <option value="C">Conference</option>
                                    <option value="J">Journal</option>
                                </select>
                                <div className="invalid-feedback">
                                    Field type is required.
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="form-label">Publisher</label>
                                <input
                                    className="form-control"
                                    required
                                    value={publisher}
                                    onChange={(event) => {
                                        setPublisher(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field publisher is required.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-lg-4">
                                <label className="form-label">Qualis</label>
                                <input
                                    className="form-control"
                                    required
                                    value={qualis}
                                    onChange={(event) => {
                                        setQualis(event.target.value);
                                    }}
                                    disabled={loading}
                                />
                                <div className="invalid-feedback">
                                    Field qualis is required.
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="form-label">Url</label>
                                <input
                                    className="form-control"
                                    required
                                    value={urlPublication}
                                    onChange={(event) => {
                                        setUrlPublication(event.target.value);
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

export default CreatePublication;