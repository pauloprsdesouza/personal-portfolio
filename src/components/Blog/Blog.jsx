import React from 'react';
import { posts } from '../../Database/Posts';
import PostCard from './PostCard';

function Blog() {
    const postItems = posts;

    return (
        <>
            <div className="row">
                {postItems.map((post, index) => (
                    <PostCard post={post} />
                ))}
            </div>

            <div className="fb-comments" data-href="https://paulosouza.me/blog" data-width="100%" data-numposts="10"></div>
        </>
    )
}

export default Blog;