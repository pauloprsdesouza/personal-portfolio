import React from 'react';

const NoItems = function ({ content }) {
    return (
        <div className="card border-0">
            <div className="card-body text-center">
                <h4>{content}</h4>
            </div>
        </div>
    )
}

export default NoItems;