import React from 'react';
import { posts } from '../../DB';
import PostCard from './PostCard';

function Blog() {
    const postItems = posts;

    return (
        <div className="row">
            {postItems.map((post, index) => (
                <PostCard post={post} />
            ))}
        </div>
    )
}

export default Blog;