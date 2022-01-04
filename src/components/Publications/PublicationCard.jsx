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
                <h5 className="card-title">
                    {publication.title}
                </h5>
                <div className="row">
                    <div className="col-9">
                        <p className="card-text">{publication.publisher}</p>
                    </div>
                    <div className="col-3 text-end">
                        <div className="mb-3">
                            {getPublicationType()}
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <span>Year: {publication.year}</span>

                </div>
                <div className="mb-2">
                    <span>Qualis: {publication.qualis}</span>
                </div>

                <h4>Abstract</h4>
                <p className="card-text text-justify">
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