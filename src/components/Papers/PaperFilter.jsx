import React, { useState } from 'react';

const PaperFilter = function ({ search }) {
    const [title, setTitle] = useState("");
    const [submissionDeadline, setSubmissionDeadline] = useState("");
    const [type, setType] = useState("");
    const [qualis, setQualis] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            search({ title, submissionDeadline, qualis, type });
        }}>
            <div className="card mb-3 shadow">
                <div className="card-body">
                    <h5 className="card-title mb-3">Filter</h5>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                    </div>

                    <div className="collapse" id="collapsePaperFilter">
                        <div className="row">
                            <div className="col-4">
                                <label className="form-label">From Deadline</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" onChange={(event) => {
                                        setSubmissionDeadline(event.target.value);
                                    }} />

                                </div>
                            </div>
                            <div className="col-4">
                                <label className="form-label">Qualis</label>
                                <select className="form-select"
                                    onChange={(event) => {
                                        setQualis(event.target.value)
                                    }}>
                                    <option value="">Select</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="B1">B1</option>
                                    <option value="B2">B2</option>
                                    <option value="B3">B3</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label className="form-label">Type</label>
                                <select className="form-select" onChange={(event) => {
                                    setType(event.target.value);
                                }}>
                                    <option value="">Select</option>
                                    <option value="J">Journal</option>
                                    <option value="C">Conference</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-link btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePaperFilter">
                            Advanced Filter
                        </button>
                        <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>
                    </div>

                </div>
            </div>
        </form >
    )
}

export default PaperFilter;