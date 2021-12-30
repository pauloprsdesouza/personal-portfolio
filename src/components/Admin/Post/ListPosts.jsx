import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';
import { fromEntryToLocaleString } from '../../../converters/datetime';
import ModalDialogConfirm from '../../Modal/ModalDialogConfirm';

const ListPosts = function () {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postToDelete, setPostToDelete] = useState({});
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        api.get("/posts")
            .then((response) => {
                setPosts(response.data.posts);
            })
            .catch((erros) => {
                navigate("/login");
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    function getStatus(status) {
        switch (status) {
            case "I":
                return <span className="badge bg-warning">In Progress</span>

            case "A":
                return <span className="badge bg-secondary">Archived</span>

            case "P":
                return <span className="badge bg-success">Published</span>
            default:
                break;
        }
    }

    function deletePost() {
        const postsTemp = [...posts];

        postsTemp.forEach((item) => {
            if (postToDelete.id == item.id) {
                item.deleting = item.deleting;
            }
        });

        setPosts(postsTemp);

        api.delete(`/posts/${postToDelete.id}`)
            .then((response) => {
                updatePostByResponse(response.data);
            }).catch((erros) => {
                console.error(erros);
            }).finally(() => {
                postToDelete.deleting = false;
            });
    }

    function updatePostByResponse(postResponse) {
        const postsTemp = [...posts];

        postsTemp.forEach((post) => {
            if(postResponse.id === post.id) {
                post.status = postResponse.status;
            }
        });

        setPosts(postsTemp);
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
                                        <button type="button" className="btn btn-danger btn-sm ms-2" onClick={(event) => {
                                            event.preventDefault();
                                            setPostToDelete(post);
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
                content={`Do you mean to delete the post ${postToDelete.title}`} 
                show={showModal} 
                close={setShowModal} 
                confirm={deletePost} 
            />
        </div>
    )
}

export default ListPosts;