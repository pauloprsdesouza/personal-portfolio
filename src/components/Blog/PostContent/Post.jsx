import React from "react";
import "../style.css";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { fromEntryToLocaleString } from "../../../converters/datetime";
import { api } from "../../../api/API";
import FBComment from "./FBComment";
import PostSkeleton from "./PostSkeleton";

const Post = function () {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const teste = id.split("-")
    const idFromSlug = teste[teste.length-1];
    
    api.get(`/posts/${idFromSlug}`)
      .then((response) => {
        const postResponse = response.data;
        setPost(postResponse);
      }).catch((error) => {

      }).finally(() => {
        setLoading(false);
      });
  }, [id]);

  function showLoading() {
    return loading ? <PostSkeleton /> :
      (
        <>
          <div className="card border-0 mb-3">
            <img src={post.frontImageUrl} className="card-img-top card-img-cover" alt="..." height="200" />
            <div className="card-body">
              <span className="text-muted text-sm">
                {post.category.name.toUpperCase()}
              </span>
              <div className="card-title mb-4">
                <h1 className="fw-bold text-center text-md-start">{post.title}</h1>
                <h6 className="text-center text-md-start text-muted">{post.subtitle}</h6>
              </div>
              <div className="d-flex justify-content-between flex-column flex-md-row align-items-center mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img className="img-cirle-md" src="https://personal-portfolio-files.s3.amazonaws.com/img/photo-introduction.jpeg" alt="..." />
                  </div>
                  <div className="d-flex flex-column ms-3 ">
                    <b>
                      {post.postedBy.name}
                    </b>
                    <span className="text-muted text-sm">
                      {fromEntryToLocaleString(post.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  <FacebookShareButton
                    className="mx-1"
                    url={`https://paulosouza.me/blog/${id}`}
                    quote="CampersTribe - World is yours to explore"
                    hashtag="#camperstribe"
                  >
                    <FacebookIcon size={30} round="true" />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    className="mx-1"
                    url={`https://paulosouza.me/blog/${id}`}
                    quote="CampersTribe - World is yours to explore"
                    hashtag="#camperstribe"
                  >
                    <LinkedinIcon size={30} round="true" />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    className="mx-1"
                    url={`https://paulosouza.me/blog/${id}`}
                    quote="CampersTribe - World is yours to explore"
                    hashtag="#camperstribe"
                  >
                    <WhatsappIcon size={30} round="true" />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={`https://paulosouza.me/blog/${id}`}
                    quote="CampersTribe - World is yours to explore"
                    hashtag="#camperstribe"
                  >
                    <TwitterIcon size={30} round="true" />
                  </TwitterShareButton>
                </div>
              </div>
              <p className="card-text lead text-justify mb-5" dangerouslySetInnerHTML={{ __html: post.content }} />
              <hr />
              <FBComment id={id} />
            </div>
          </div>

        </>
      )
  }

  return (
    <div className="container mt-3">
      {showLoading()}
    </div>
  );
};

export default Post;
