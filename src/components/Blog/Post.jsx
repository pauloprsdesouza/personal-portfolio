import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { posts } from '../../Database/Posts';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [teste, setTeste] = useState(bla());
    

    useEffect(() => {
        const postById = posts.find(item => item.id == id);
        setTeste(bla());
        setPost(postById);
    }, [id])


    function bla() {
        return (
            <div className="fb-comments" data-href={`https://paulosouza.me/blog/${id}`} data-width="100%" data-numposts="10"></div>
        )
    }

    return (
        <>
            {post.title}
            <div className="card">
                <div className="card-body">
                    {teste}
                </div>
            </div>
        </>
    )
}

export default Post;