import React from "react";
import "./style.css"

const Skill = function ({ skills }) {
  return (
    <section className="mb-5">
      <h1 className="text-white section-title mb-3">what I do.</h1>
      <div className="row mb-4 text-white">
        {skills.map((skill, index) => (
          <div key={index} className="col-lg-4 col-md-6 px-md-2 mb-3">
            <div className="card card-education-teste border-0 shadow" data-aos="zoom-in">
              <div className="card-body card-hover">
                <span><i className={`${skill.icon} fa-4x`} /></span>
                <h5 className="card-title mt-3 text-white">{skill.title}</h5>
                <p className="card-text text-justify">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
