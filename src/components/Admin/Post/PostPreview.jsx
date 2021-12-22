import React from "react";

const PostPreview = function ({ postContent }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
    );
};

export default PostPreview;
