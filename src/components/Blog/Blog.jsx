import React from 'react';
import { posts } from '../../Database/Posts';
import PostCard from './PostCard';

function Blog() {
    const postItems = posts;

    return (
        <>
            {postItems.map((post, index) => (
                <PostCard post={post} key={index} />
            ))}
        </>
    )
}

export default Blog;