import React, { useEffect, useState } from 'react';
import api from '../../../api/API';

const PostFilter = function ({ search }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState("");

    useEffect(() => {
        setLoading(true);

        api.get("/categories")
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((erros) => {

            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            search({ title, categoryId });
        }}>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="mb-4">Topics</h5>
                    <div className="row mb-3">
                        <div className="col-lg-8">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" onChange={(event) => {
                                    setTitle(event.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Topic</label>
                            <select className="form-control" onChange={(event) => {
                                setCategoryId(event.target.value);
                            }}>
                                <option value="">Select</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PostFilter;