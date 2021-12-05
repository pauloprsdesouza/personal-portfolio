import React from 'react';
import { educations, experiences, skills } from '../../DB';
import Item from './Item';
import "./style.css"

function Home() {
    const educationsItems = educations;
    const experiencesItems = experiences;
    const skillsItems = skills;

    function createEducationItems() {
        return (
            <section>
                {educationsItems.map((item, index) => (
                    <div key={index} className="card mb-2 border-0 card-shadow">
                        <h5 className="card-titlec p-3 bg-dark-light text-white">{item.course}</h5>
                        <div className="card-body ">
                            <span className="badge bg-secondary mb-1"
                            >{item.startedAt} - {item.finishedAt}</span>
                            <p className="card-text">
                                <a
                                    href="education.university.url"
                                    className="link-secondary"
                                    target="_blank">
                                    {item.university.name}
                                </a>
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
                                <a href="experience.company.url"
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

    return (
        <>
            <Item title={"Educação"} items={createEducationItems} />
            <Item title={"Experiências"} items={createExperienceItems} />
            <Item title={"Staks Que Trabalho"} items={createSkillsItems} />
        </>
    )
}

export default Home;