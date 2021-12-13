import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { get } from '../../api/API';
import PostCard from './PostCard';

function Blog() {
    const [data, setData] = useState({posts: []});

    useEffect(() => {
        get("/posts", setData);
    }, [])

    return (
        <>
            {data.posts.map((post, index) => (
                <PostCard post={post} key={index} />
            ))}
        </>
    )
}

export default Blog;