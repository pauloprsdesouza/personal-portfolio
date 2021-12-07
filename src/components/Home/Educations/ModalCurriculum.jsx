import React from 'react';

function ModalCurriculum({ education, index, dismiss }) {
    return (
        <div className="modal fade" id={`modalCurriculum${index}`}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-purple">{education.course}</h5>
                    </div>
                    <div className="modal-body p-0">

                        <h5 className="text-purple mb-3"></h5>
                        <ul class="list-group list-group-flush mb-3">
                            {education.curriculum.map((item, id) => (
                                <li class="list-group-item d-flex justify-content-between align-items-center" key={id}>
                                    {item.discipline}
                                    <span className="text-bold">{item.workload}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" >Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCurriculum;