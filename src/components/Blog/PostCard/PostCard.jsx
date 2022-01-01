import React from "react";
import { Link } from "react-router-dom";
import { fromEntryToLocaleString } from "../../../converters/datetime";
import { slugify } from "../../../converters/slugUrl";
import '../style.css'

const PostCard = function ({ post }) {

  function createSlugUrl() {
    return slugify(post.title) + "-" + post.id;
  }

  return (
    <div className="card border-0 mb-3">
      <div className="row">
        <div className="col-lg-2 text-center">
          <img src={post.frontImageUrl} className="card-img-cover img-fluid rounded-start" alt={post.title} />
        </div>
        <div className="col-lg-8">
          <div className="card-body">
            <div className="mb-2 align-middle">
              <span className="text-start">
                <img src={post.postedBy.profileImageUrl} className="img-cirle-sm" alt={post.postedBy.name} />
                <span className="ms-2">{post.postedBy.name}</span>
              </span>
            </div>
            <h3 className="card-title text-primary mb-2">{post.title}</h3>
            <h6 className="card-subtitle mb-4 text-muted">{post.subtitle}</h6>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Link className="btn btn-outline-secondary btn-sm" to={`/blog/${createSlugUrl()}`}>
                Continue Reading&nbsp;
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <span className="fs-6 fw-light align-middle text-muted">
              {fromEntryToLocaleString(post.createdAt)} <i className="fas fa-circle font-size-3em"></i> {post.readingTime} min read
            </span>
          </div>
        </div>
        <div className="col-md-2 text-center align-self-center">
          <span className="text-purple text-md">{post.views}</span>
          <h6 className="text-muted text-sm">VIEWS</h6>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
