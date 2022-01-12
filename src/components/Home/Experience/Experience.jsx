import React from "react";
import ModalActivitiesExperience from "./ModalActivitiesExperience";

const Experience = function ({ jobs }) {
  return (
    <section className="mb-5">
      <h3 className="text-white section-title">experience.</h3>
      {jobs.map((job) => (
        <div key={job.id} className="card card-education-teste border-0 mb-3 shadow" data-aos="fade-up">
          <div className="card-body card-hover card-border-left-purple">
            <div className="d-flex justify-content-between align-items-center g-2">
              <div>
                <h5 className="text-white card-title">{job.role}</h5>
                <h6 className="card-subtitle mb-3 text-white">{job.place}</h6>
                <a
                  href={job.company.url}
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-university" />
                  &nbsp;
                  {job.company.name}
                </a>
              </div>
              <div className="mt-1 mb-2">
                <span className="text-white">
                  {job.startedAt}&nbsp;-&nbsp;{job.finishedAt}
                </span>
              </div>
            </div>
            <div className="d-grid d-sm-block mt-2">
              <button type="button" className="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target={`#modalActivitiesExperience${job.id}`}>Work Activities</button>
            </div>
          </div>
          <ModalActivitiesExperience job={job} />
        </div>
      ))}
    </section>
  );
};

export default Experience;
