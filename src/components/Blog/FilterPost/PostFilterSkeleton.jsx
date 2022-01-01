import React from 'react';

const PostFilterSkeleton = function () {
    return (
        <div className="post-card skeleton card border-0 mb-3">
            <div className="card-body">
                <div className="mb-3 hide-text hide-text-md">&nbsp;</div>
                <div className="d-flex flex-row">
                    <div className="mb-3 hide-text hide-text-md me-2">&nbsp;</div>
                    <div className="mb-3 hide-text hide-text-md me-2">&nbsp;</div>
                    <div className="mb-3 hide-text hide-text-md">&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default PostFilterSkeleton;