import React from 'react';
import { Link } from 'react-router-dom';
import { fromEntryToLocaleString } from '../../converters/datetime'

function PostCard({ post }) {

    return (
        <div className="card border-0 mb-3">
            <div className="row">
                <div className="col-md-2">
                    <img src={post.frontImageUrl} className="card-img-cover img-fluid rounded-start" alt={post.title} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 text-muted">
                            <span><i className="fas fa-user"></i>&nbsp;{post.postedBy}</span>
                            <span><i className="fas fa-tag"></i>&nbsp;{post.category}</span>
                        </div>
                        <h5 className="card-title mb-3">{post.title}</h5>
                        <h6 className="card-subtitle mb-3">{post.subtitle}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="btn btn-outline-secondary btn-sm" to={`/blog/${post.id}`}>Read more&nbsp;<i className="fas fa-chevron-right"></i></Link>
                            <span><i className="far fa-calendar-alt"></i>&nbsp;{fromEntryToLocaleString(post.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;