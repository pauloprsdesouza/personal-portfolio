import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';
import { fromEntryToLocaleString } from '../../../converters/datetime';

const ListPosts = function () {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        api.get("/posts")
            .then((response) => {
                setPosts(response.data.posts);
            })
            .catch((erros) => {

            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    function getStatus(status) {
        switch (status) {
            case "I":
                return <span className="badge bg-warning">In Progress</span>

            case "C":
                return <span className="badge bg-secondary">Archived</span>

            case "P":
                return <span className="badge bg-success">Published</span>
            default:
                break;
        }
    }

    function showLoading() {
        return loading ? (
            <tfoot>
                <tr className="text-center">
                    <td colspan="4"> <i className="fas fa-spinner fa-pulse"></i>&nbsp;Loading...</td>
                </tr>
            </tfoot>
        ) : "";
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Posts</h5>
                        <Link className="btn btn-primary" to="create">New Post</Link>
                    </div>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Updated At</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{fromEntryToLocaleString(post.updatedAt)}</td>
                                    <td>{getStatus(post.status)}</td>
                                    <td>
                                        <Link className="btn btn-secondary btn-sm" to={post.id}>Edit</Link>
                                        <button className="btn btn-danger btn-sm ms-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {showLoading()}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListPosts;