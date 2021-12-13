import React from 'react';
import '../../../index.css'
import ModalCurriculum from './ModalCurriculum';

function Education({ educations }) {
    return (
        <section>
            {educations.map((education) => (
                <div key={education.id} className="card mb-3 border-0" data-aos="fade-up">
                    <div className="card-body card-border-left-purple">
                        <h5 className="card-title">{education.course}</h5>
                        <h6 className="card-subtitle mb-3 text-muted">{education.researchLine}</h6>
                        <a
                            href={education.university.url}
                            className="text-muted text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fas fa-university"></i>&nbsp;{education.university.name}
                        </a>
                        <div className="mt-1 mb-3">
                            <span className="text-purple"><i className="far fa-calendar-alt"></i>&nbsp;{education.startedAt} - {education.finishedAt}</span>
                        </div>
                        <div className="d-grid gap-2 d-sm-block">
                            <button className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#modalCurriculum${education.id}`}>Discplines</button>
                        </div>
                    </div>
                    <ModalCurriculum education={education} />
                </div>
            ))}
        </section>
    )
}

export default Education;