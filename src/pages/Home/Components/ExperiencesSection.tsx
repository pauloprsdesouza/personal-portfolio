import React from "react";
import ExperiencesComponent from "./Experiences/ExperiencesComponent";

const ExperienceSection: React.FC = () => {
    return (
        <div className="text-center my-5" id="experience">
            <span className="lead">Explore My</span>
            <h1 className="mb-5">Experience</h1>

            <div className="row d-flex align-items-stretch justify-content-between">
                <div className="col-lg-4 col-12 mb-4 mb-lg-0 d-flex">
                    <ExperiencesComponent type="frontend" title="Frontend" />
                </div>
                <div className="col-lg-4 col-12 mb-4 mb-lg-0 d-flex">
                    <ExperiencesComponent type="backend" title="Backend" />
                </div>
                <div className="col-lg-4 col-12 mb-4 mb-lg-0 d-flex">
                    <ExperiencesComponent type="infra" title="Infrastructure" />
                </div>
            </div>
        </div >
    )
}

export default ExperienceSection;