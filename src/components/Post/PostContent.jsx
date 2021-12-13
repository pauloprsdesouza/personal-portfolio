import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

function PostContent() {
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [category, setCategory] = useState();
    const [status, setStatus] = useState();
    const [categories, setCategories] = useState([]);

    const [newCategory, setNewCategory] = useState(false);

    function isNewCategory() {
        return !newCategory ?
            (
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <div class="input-group mb-3">
                            <select className="form-control">
                                {categories.map((category) => (
                                    <option>{category.name}</option>
                                ))}
                            </select>
                            <button type="button" class="btn btn-outline-primary" onClick={() => {
                                setNewCategory(true);
                            }}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ) : ""
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input className="form-control" onChange={(event) => {
                            setTitle(event.target.value)
                        }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Subtitle</label>
                        <input className="form-control" onChange={(event) => {
                            setSubtitle(event.target.value)
                        }} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {isNewCategory()}
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select className="form-control">
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Post Content</label>
                <textarea className="form-control" rows="10" cols="10" onChange={(event) => {
                    setContent(event.target.value)
                }} />
            </div>
        </form>
    )
}

export default PostContent;