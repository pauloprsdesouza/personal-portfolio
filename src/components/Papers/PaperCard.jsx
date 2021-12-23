import React from 'react';

const PaperCard = function ({ paper }) {
    function getType(type) {
        switch (type) {
            case "J":
                return <span className="badge bg-warning">Journal</span>

            case "C":
                return <span className="badge bg-secondary">Conference</span>

            default:
                break;
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{paper.title}</h4>
                <div className="row mb-3">
                    <div className="col-9">
                        <h6><i className="far fa-calendar-alt"></i> Submission Deadline: {paper.submissionDeadline}</h6>
                        <h6><i className="fas fa-receipt"></i> Price: {paper.price}</h6>
                        <i className="fas fa-map-marker-alt"></i> Local: {paper.local}
                    </div>
                    <div className="col-3 text-end">
                        <h6>Qualis {paper.qualis}</h6>
                        <span>{getType(paper.type)}</span>
                    </div>
                </div>
                <button className="btn btn-outline-primary btn-sm">See Website</button>
            </div>
        </div>
    )
}

export default PaperCard;