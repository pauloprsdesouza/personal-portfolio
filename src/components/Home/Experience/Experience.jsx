import React from 'react';
import { jobs } from '../../../Database/Jobs';
import ModalActivitiesExperience from './ModalActivitiesExperience';

function Experience() {
    const jobsItems = jobs;  

    return (
        <section>
            {jobsItems.map((job) => (
                <div key={job.id} className="card border-0 mb-3"  data-aos="fade-up">
                    <div className="card-body card-border-left-green">
                    <h5 className="card-title">{job.role}</h5>
                        <h6 className="card-subtitle mb-3 text-muted">{job.place}</h6>
                        <a
                            href={job.company.url}
                            className="text-muted text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fas fa-university"></i>&nbsp;{job.company.name}
                        </a>
                        <div className="mt-1 mb-3" >
                            <span className="text-green"><i className="far fa-building"></i>&nbsp;{job.startedAt} - {job.finishedAt}</span>
                        </div>
                        <div className="d-grid gap-2 d-sm-block">
                            <button className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#modalActivitiesExperience${job.id}`}>Atividades Realizadas</button>
                        </div>
                    </div>
                    <ModalActivitiesExperience job={job}/>
                </div>
            ))}
        </section>
    )
}

export default Experience;