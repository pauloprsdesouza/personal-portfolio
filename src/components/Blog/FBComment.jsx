import React, { useEffect } from 'react';


function FBComment({ id }) {
    useEffect(() => {
        window.FB.XFBML.parse();
    });

    return (
        <div className="card">
            <div className="card-body">
                <div className="fb-comments" data-mobile="true" data-href={`http://paulosouza.me/blog/${id}`} data-width="100%" data-numposts="5"></div>
            </div>
        </div>
    )
}

export default FBComment;