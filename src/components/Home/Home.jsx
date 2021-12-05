import React from 'react';
import { educations, experiences, skills } from '../../DB';
import Introduction from './Indtroduction';
import Item from './Item';
import "./style.css"

function Home() {
    const educationsItems = educations;
    const experiencesItems = experiences;
    const skillsItems = skills;
    const sections = ["Educação", "Experiência", "Stacks"];

    function createEducationItems() {
        return (
            <section>
                {educationsItems.map((education, index) => (
                    <div key={index} className="card mb-3 border-0 card-shadow">
                        <div className="card-body ">
                            <div className="d-flex card-title m-0">
                                <h5 className="text-primary">{education.course}</h5>&nbsp;
                                <span className="text-secondary">({education.startedAt} - {education.finishedAt})</span>
                            </div>
                            <span className="text-secondary">Linha de Pesquisa: {education.researchLine}</span>
                            <span className="badge bg-secondary"></span>
                            <div>
                                <a
                                    href={education.university.url}
                                    className="link-secondary"
                                    target="_blank">
                                    {education.university.name}
                                </a>
                            </div>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                ))}
            </section>
        )
    }

    function createExperienceItems() {
        return (
            <section>
                {experiencesItems.map((experience, index) => (
                    <div key={index} className="card border-0 card-shadow mb-3">
                        <div className="card-body">
                            <span className="badge bg-secondary mb-2"
                            >{experience.startedAt} - {experience.finishedAt}</span>
                            <h5 className="card-title">{experience.job}</h5>
                            <p className="card-text">
                                <a href={experience.company.url}
                                    className="link-secondary"
                                    target="_blank">
                                    {experience.company.name}</a>
                                <br />
                                {experience.place}
                            </p>
                            <p className="card-text text-justify">
                                {experience.activities}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        )
    }

    function createSkillsItems() {
        return (
            <section>
                <div className="row">
                    {skillsItems.map((skill, index) => (
                        <div key={index} className="col-md-4 px-md-2 mb-3">
                            <div className="card card-shadow border-0">
                                <div className="card-body text-center">
                                    <i className={`${skill.icon} " fa-5x mb-3"`}></i>
                                    <h5 className="card-title">{skill.title}</h5>
                                    <p className="card-text text-secondary">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    function createAcordionContent(section) {
        if (section === "Educação") {
            return createEducationItems();
        } else if (section === "Experiência") {
            return createExperienceItems();
        } else {
            return createSkillsItems();
        }
    }

    return (
        <>
            <Introduction />

            <div className="accordion" id="acordionSections">
                {sections.map((section, index) => (
                    <div className="accordion-item mb-2" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                {section}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index == 0 ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#acordionSections">
                            <div className="accordion-body box-body-gray">
                                {createAcordionContent(section)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;