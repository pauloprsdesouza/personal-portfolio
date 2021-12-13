import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FBComment from './FBComment';
import "./style.css"
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import { get } from '../../api/API';
import { fromEntryToLocaleString } from '../../converters/datetime'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        get(`/posts/${id}`, setPost)
    }, [id])

    return (
        <>
            <div className="card mb-3">
                <img src={post.frontImageUrl} className="card-img-top card-img-cover" alt="..." height="200" />
                <div className="card-body">
                    <div className="card-title mb-3">
                        <h1 className="text-center text-md-start">{post.title}</h1>
                    </div>
                    <div className="d-flex justify-content-between flex-column flex-md-row align-items-center">
                        <div className="d-flex mb-3">
                            <div className="flex-shrink-0">
                                <img className="img-cirle-sm" src="https://personal-portfolio-files.s3.amazonaws.com/img/photo-introduction.jpeg" width="70" height="70" alt="..." />
                            </div>
                            <div className="d-flex flex-column ms-3 ">
                                <span><i className="fas fa-user"></i>&nbsp;{post.postedBy}</span>
                                <span><i className="far fa-calendar-alt"></i>&nbsp;{fromEntryToLocaleString(post.createdAt)}</span>
                                <span><i className="fas fa-tag"></i>&nbsp;{post.category}</span>
                            </div>
                        </div>
                        <div className="text-end mb-4">
                            <FacebookShareButton
                                className="mx-1"
                                url={`https://paulosouza.me/blog/${id}`}
                                quote={"CampersTribe - World is yours to explore"}
                                hashtag="#camperstribe">
                                <FacebookIcon size={36} round="true" />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                className="mx-1"
                                url={`https://paulosouza.me/blog/${id}`}
                                quote={"CampersTribe - World is yours to explore"}
                                hashtag="#camperstribe">
                                <LinkedinIcon size={36} round="true" />
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                className="mx-1"
                                url={`https://paulosouza.me/blog/${id}`}
                                quote={"CampersTribe - World is yours to explore"}
                                hashtag="#camperstribe">
                                <WhatsappIcon size={36} round="true" />
                            </WhatsappShareButton>
                            <TwitterShareButton
                                url={`https://paulosouza.me/blog/${id}`}
                                quote={"CampersTribe - World is yours to explore"}
                                hashtag="#camperstribe">
                                <TwitterIcon size={36} round="true" />
                            </TwitterShareButton>
                        </div>
                    </div>
                    <p className="card-text lead text-justify" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
            </div>
            <FBComment id={id} />
        </>
    )
}

export default Post;