import React, { useEffect } from 'react';

function FBComment({ id }) {
    useEffect(() => {
        if (window.FB !== undefined) {
            window.FB.XFBML.parse();
        }
       
    }, [id]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="fb-comments" data-href={`http://paulosouza.me/blog/${id}`} data-width="100%" data-numposts="5"></div>
            </div>
        </div>
    )
}

export default FBComment;