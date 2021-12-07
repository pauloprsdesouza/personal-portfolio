import React from 'react';
import { skills } from '../../Database/Skills';

function Stack() {
    const skillsItems = skills;

    return (
        <section>
            <div className="row">
                {skillsItems.map((skill, index) => (
                    <div key={index} className="col-md-4 px-md-2 mb-3">
                        <div className="card border-0">
                            <div className="card-body text-center card-border-bottom-yellow">
                                <i className={`${skill.icon} " fa-5x mb-3"`}></i>
                                <h5 className="card-title">{skill.title}</h5>
                                {/* <p className="card-text text-secondary">{skill.description}</p> */}
                                {skill.stacks.map((stack, index) => (
                                    <img className="m-1" src={stack.url} alt={stack.name} key={index}></img>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stack;