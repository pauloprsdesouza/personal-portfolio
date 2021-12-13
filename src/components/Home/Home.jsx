import React from 'react';
import { educationsDB } from '../../Database/Educations';
import { jobsDB } from '../../Database/Jobs';
import { skillsDB } from '../../Database/Skills';
import Education from './Educations/Education';
import Experience from './Experience/Experience';
import Introduction from './Indtroduction';
import Skill from './Skill';
import "./style.css"

function Home() {
    const sections = [
        {
            id: 1,
            icon: <i className="fas fa-user-graduate"></i>,
            title: "EDUCAÇÃO",
            show: true
        },
        {
            id: 2,
            icon: <i className="fas fa-briefcase"></i>,
            title: "EXPERIÊNCIA",
            show: true
        },
        {
            id: 3,
            icon: <i className="fas fa-layer-group"></i>,
            title: "STACKS",
            show: true
        }];

    function createContent(section) {
        switch (section.id) {
            case 1:
                return <Education educations={educationsDB}/>
            case 2:
                return <Experience jobs={jobsDB}/>
            case 3:
                return <Skill skills={skillsDB}/>
            default:
                break;
        }
    }

    return (
        <>
            <Introduction />

            {sections.map((section) => (
                <section key={section.id}>
                    <h1 className="mb-3 mt-5 text-white teste">{section.icon} {section.title}</h1>
                    {createContent(section)}
                </section>

            ))}
        </>
    )
}

export default Home;