import React, { useState } from 'react';
import { posts } from '../../Database/Posts';
import Post from './Post';
import PostCard from './PostCard';

function Blog() {
    const postItems = posts;

    return (
        <>
            <div className="row">
                {postItems.map((post, index) => (
                    <PostCard post={post} key={index} />
                ))}
            </div>
        </>
    )
}

export default Blog;