import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="card border-0 mb-3">
            <div class="row">
                <div class="col-md-2">
                    <img src={post.imgHeader} className="card-img-cover img-fluid rounded-start"  alt={post.title} />
                </div>
                <div class="col-md-10">
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 text-muted">
                            <span><i className="fas fa-user"></i>&nbsp;{post.postedBy}</span>
                            <span><i className="fas fa-tag"></i>&nbsp;{post.category}</span>
                        </div>
                        <h5 className="card-title mb-3">{post.title}</h5>
                        <p className="card-text text-muted">{post.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="btn btn-outline-secondary btn-sm" to={`/blog/${post.id}`}>Ler mais&nbsp;<i className="fas fa-chevron-right"></i></Link>
                            <span><i className="far fa-calendar-alt"></i>&nbsp;{post.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;