import React from 'react';

const PublicationCard = function ({ project: publication }) {
    function getPublicationType() {
        switch (publication.type) {
            case "C":
                return <span className="badge bg-primary">Conference</span>

            case "J":
                return <span className="badge bg-success">Journal</span>

            default:
                break;
        }
    }

    return (
        <div className="card shadow mb-3">
            <div className="card-body">
                <h4 className="card-title">
                    {publication.title}
                </h4>
                <div className="row mb-3 text-muted">
                    <div className="col-lg-9 order-1 order-lg-0">
                        <div>
                            <b>Publisher</b>: {publication.publisher}
                        </div>
                        <div>
                            <span><b>Year</b>: {publication.year}</span>
                        </div>
                        <div>
                            <span><b>Qualis</b>: {publication.qualis}</span>
                        </div>
                    </div>
                    <div className="col-lg-3 order-0 order-lg-1 text-lg-end">
                        <div className="mb-3">
                            {getPublicationType()}
                        </div>
                    </div>
                </div>

                <h5>Abstract</h5>
                <p className="card-text text-justify text-muted">
                    {publication.abstract}
                </p>
                <a
                    href={publication.urlPublication}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer">See on Publisher
                </a>
            </div>
        </div >
    )
}

export default PublicationCard;