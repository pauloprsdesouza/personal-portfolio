import React from 'react';
import { fromEntryToLocaleString } from '../../converters/datetime';

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
        <div className="card shadow mb-3">
            <div className="card-body">
                <h5 className="card-title mb-3">{paper.title}</h5>
                <div className="row">
                    <div className="col-lg-9 order-1 order-lg-0 text-muted">
                        <h6><i className="far fa-calendar-alt"></i> Submission Deadline: {fromEntryToLocaleString(paper.submissionDeadline)}</h6>
                        <h6><i className="fas fa-map-marker-alt"></i> Local: {paper.local}</h6>
                    </div>
                    <div className="col-lg-3 text-lg-end order-0 order-lg-1 mb-lg-3">
                        <h6>Qualis {paper.qualis}</h6>
                        <span>{getType(paper.type)}</span>
                    </div>
                </div>
                <a
                    href={paper.websiteUrl}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer">
                    See Website
                </a>
            </div>
        </div>
    )
}

export default PaperCard;