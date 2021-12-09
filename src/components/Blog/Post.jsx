import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { posts } from '../../Database/Posts';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const postById = posts.find(item => item.id === id);

        setPost(postById);
    }, [id])

    return (
        <>
            {post.title}
        </>
    )
}

export default Post;