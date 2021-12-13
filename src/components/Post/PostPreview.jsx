import React from 'react';

function PostPreview({ postContent }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
    )
}

export default PostPreview;