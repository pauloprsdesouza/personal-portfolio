import React from 'react';
import "../../Home/style.css"

function ModalActivitiesExperience({ job }) {
    function createUsedStacks(stacks) {
        return (
            stacks.map((stack, index) => (
                <img className="m-1" src={stack.url} alt={stack.name} key={index}></img>
            ))
        )
    }

    return (
        <div className="modal fade" id={`modalActivitiesExperience${job.id}`}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{job.role}</h5>
                    </div>
                    <div className="modal-body">
                        <p className="card-text text-justify" dangerouslySetInnerHTML={{__html: job.activity.description}}></p>

                        <div className="mb-3">
                            <h5>Used Stacks</h5>
                            {createUsedStacks(job.activity.usedStacks)}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalActivitiesExperience;