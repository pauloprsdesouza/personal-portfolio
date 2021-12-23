import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { api } from '../../../api/API';

const ListPapers = function () {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        api.get("/papers")
            .then((response) => {
                setPapers(response.data.papers);
            })
            .catch((erros) => {

            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

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
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="title d-flex justify-content-between align-middle mb-4">
                        <h5>Registered Papers</h5>
                        <Link className="btn btn-primary" to="create">New Paper</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Deadline</th>
                                <th>Price</th>
                                <th>Qualis</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {papers.map((paper) => (
                                <tr key={paper.id}>
                                    <td>{paper.title}</td>
                                    <td>{getType(paper.type)}</td>
                                    <td>{paper.submissionDeadline}</td>
                                    <td>{paper.price}</td>
                                    <td>{paper.qualis}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListPapers;