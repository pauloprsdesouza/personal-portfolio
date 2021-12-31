import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import api from "../../../api/API";
import PostPreview from "./PostPreview";

const CreatePost = function () {
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [status, setStatus] = useState("");
    const [frontImageUrl, setFrontImageUrl] = useState("");
    const [readingTime, setReadingTime] = useState(0);
    const [data, setData] = useState({ categories: [] });
    const formPost = useRef();
    const [isFormValid, setIsFormValid] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/categories")
            .then((response) => {
                setData(response.data);
            });

        setIsFormValid(formPost.current.checkValidity());
    }, []);

    useEffect(() => {
        if (id) {
            setLoading(true);

            api.get(`/posts/${id}`)
                .then((response) => {
                    const post = response.data;

                    setContent(post.content);
                    setTitle(post.title);
                    setSubtitle(post.subtitle);
                    setStatus(post.status);
                    setFrontImageUrl(post.frontImageUrl);
                    setCategoryId(post.category.id);
                    setReadingTime(post.readingTime);
                }).catch((error) => {

                }).finally(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    function save(event) {
        event.preventDefault();

        const post = {
            title,
            subtitle,
            categoryId,
            status,
            frontImageUrl,
            content,
            readingTime
        }

        setSaving(true);

        if (id) {
            api.put(`/posts/${id}`, post)
                .then((response) => {
                    navigate("/admin/posts")
                }).catch((error) => {

                }).finally(() => {
                    setSaving(false);
                });
        } else {
            api.post("/posts", post)
                .then((response) => {
                    navigate("/admin/posts")
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
                        <div className="card-title mb-4"><h1>New Post</h1></div>
                        <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Post</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Preview</button>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                                disabled={loading}
                                            />
                                            <div className="invalid-feedback">
                                                Field title is required.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subtitle</label>
                                            <input
                                                className="form-control"
                                                required
                                                value={subtitle}
                                                onChange={(event) => {
                                                    setSubtitle(event.target.value);
                                                }}
                                                disabled={loading}
                                            />
                                            <div className="invalid-feedback">
                                                Field subtitle is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">Category</label>
                                        <select
                                            className="form-select"
                                            required
                                            value={categoryId}
                                            onChange={(event) => {
                                                setCategoryId(event.target.value);
                                            }}
                                            disabled={loading}
                                        >
                                            <option value="">Select</option>
                                            {data.categories.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}
                                        </select>
                                        <div className="invalid-feedback">
                                            Field category is required.
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Status</label>
                                            <select
                                                value={status}
                                                required
                                                className="form-select"
                                                onChange={(event) => {
                                                    setStatus(event.target.value);
                                                }}
                                                disabled={loading}
                                            >
                                                <option value="">Select</option>
                                                <option value="I">In Progress</option>
                                                <option value="A">Archived</option>
                                                <option value="P">Published</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Field status is required.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Reading Time (min)</label>
                                            <input type="number" className="form-control"
                                                required
                                                value={readingTime}
                                                onChange={(event) => {
                                                    setReadingTime(event.target.value);
                                                }}
                                                disabled={loading}
                                            />
                                        </div>
                                        <div className="invalid-feedback">
                                            Field reading time is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Front Image</label>
                                                <input
                                                    className="form-control"
                                                    required
                                                    value={frontImageUrl}
                                                    onChange={(event) => {
                                                        setFrontImageUrl(event.target.value);
                                                    }}
                                                    disabled={loading}
                                                />
                                                <div className="invalid-feedback">
                                                    Field front image is required.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Post Content</label>
                                    <textarea
                                        className="form-control"
                                        rows="10"
                                        cols="10"
                                        required
                                        value={content}
                                        onChange={(event) => {
                                            setContent(event.target.value);
                                        }}
                                        disabled={loading}
                                    />
                                    <div className="invalid-feedback">
                                        Field post content is required.
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <PostPreview postContent={content} />
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
    );
};

export default CreatePost;
