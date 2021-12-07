import React from 'react';
import { experiences } from '../../Database/Experiences';

function Experience() {
    const experiencesItems = experiences;

    return (
        <section>
            {experiencesItems.map((experience, index) => (
                <div key={index} className="card border-0 mb-3">
                    <div className="card-body card-border-left-green">
                    <h5 className="card-title">{experience.job}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">{experience.place}</h6>
                        <a
                            href={experience.company.url}
                            className="text-muted text-decoration-none"
                            target="_blank">
                            <i class="fas fa-university"></i>&nbsp;{experience.company.name}
                        </a>
                        <div className="mt-1 mb-3">
                            <span className="text-green"><i class="far fa-building"></i>&nbsp;{experience.startedAt} - {experience.finishedAt}</span>
                        </div>
                        <div class="d-grid gap-2 d-sm-block">
                            <button className="btn btn-outline-secondary btn-sm">Stacks Utilizadas</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experience;