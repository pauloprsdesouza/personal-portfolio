import React from 'react';

function Item({title, items}) {

    return (
        <div className="card mb-3">
            <div className="card-body box-body-gray">
                <div className="card-title">
                    <h2 className="mb-4"><b>{title}</b></h2>
                </div>
                {items()}    
            </div>
        </div>
    )
}

export default Item;