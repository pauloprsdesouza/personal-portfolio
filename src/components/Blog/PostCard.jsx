import React from 'react';

function PostCard({ post }) {
    return (
        <div className="col-md-3 col-xs-12 mb-3">
            <div className="card">
                <img src={post.imgHeader} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 text-muted">
                        <span><i className="fas fa-user"></i>&nbsp;{post.postedBy}</span>
                        <span><i className="fas fa-tag"></i>&nbsp;{post.category}</span>
                    </div>
                    <h5 className="card-title mb-3">{post.title}</h5>
                    <p className="card-text text-muted">{post.content}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-secondary btn-sm">Ler mais&nbsp;<i className="fas fa-chevron-right"></i></button>
                    <span><i className="far fa-calendar-alt"></i>&nbsp;{post.createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard;