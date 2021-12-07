import React from 'react';
import { educations } from '../../../Database/Educations';
import '../../../index.css'
import ModalCurriculum from './ModalCurriculum';

function Education() {
    const educationsItems = educations;

    return (
        <section>
            {educationsItems.map((education, index) => (
                <div key={index} className="card mb-3 border-0">
                    <div className="card-body card-border-left-purple">
                        <h5 className="card-title">{education.course}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">{education.researchLine}</h6>
                        <a
                            href={education.university.url}
                            className="text-muted text-decoration-none"
                            target="_blank">
                            <i class="fas fa-university"></i>&nbsp;{education.university.name}
                        </a>
                        <div className="mt-1 mb-3">
                            <span className="text-purple"><i class="far fa-calendar-alt"></i>&nbsp;{education.startedAt} - {education.finishedAt}</span>
                        </div>
                        <div class="d-grid gap-2 d-sm-block">
                            <button className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#modalCurriculum${index}`}>Grade Curricular</button>
                        </div>
                    </div>
                    <ModalCurriculum education={education} index={index} />
                </div>
            ))}
        </section>
    )
}

export default Education;