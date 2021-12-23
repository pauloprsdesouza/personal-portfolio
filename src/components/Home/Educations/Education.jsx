import React from "react";
import "../../../index.css";
import ModalCurriculum from "./ModalCurriculum";
import "../style.css"

const Education = function ({ educations }) {
  return (
    <section className="mb-5">
      <h1 className="text-white section-title">education.</h1>
      <h6 className="text-white mb-3 fst-italic text-muted">"Live as if you were to die tomorrow. Learn as if you were to live forever" - Mahatma Gandhi</h6>
      {educations.map((education) => (
        <div key={education.id} className="card card-education-teste mb-3 border-0 shadow" data-aos="fade-up">
          <div className="card-body card-hover card-border-left-purple">
            <div className="mb-2">
              <span className="text-white">
                {education.startedAt}
                -
                {education.finishedAt}
              </span>
            </div>
            <h5 className="card-title">{education.course}</h5>
            <h6 className="text-white card-subtitle mb-3">{education.researchLine}</h6>
            <a
              href={education.university.url}
              className="text-white text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-university" />
              &nbsp;
              {education.university.name}
            </a>

            <div className="d-grid d-sm-block mt-3">
              <button type="button" className="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target={`#modalCurriculum${education.id}`}>Discplines</button>
            </div>
          </div>
          <ModalCurriculum education={education} />
        </div>
      ))}
    </section>
  );
};

export default Education;
