import React from 'react';
import Education from './Educations/Education';
import Experience from './Experience';
import Introduction from './Indtroduction';
import Stack from './Stack';
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
                return <Education />
            case 2:
                return <Experience />
            case 3:
                return <Stack />
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