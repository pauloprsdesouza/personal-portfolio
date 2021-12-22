import React from "react";

const ModalCurriculum = function ({ education }) {
  return (
    <div className="modal fade" id={`modalCurriculum${education.id}`}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{education.course}</h5>
          </div>
          <div className="modal-body p-0">
            <ul className="list-group list-group-flush mb-3">
              {education.curriculum.map((discipline, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  {discipline}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCurriculum;
