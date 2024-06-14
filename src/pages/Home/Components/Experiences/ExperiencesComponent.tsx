import React from "react";
import "../../style.css"
import { ExperiencesModel } from "./Models/ExperienceModel";
import experiences from "../../../../helpers/ExperiencesHelper";

interface RenderExperiencesProps {
    type: string;
    title: string;
}

const ExperiencesComponent: React.FC<RenderExperiencesProps> = ({ type, title }) => {
    const filteredExperiences: ExperiencesModel = experiences.filter(experience => experience.type === type);

    return (
        <div className="card rounded-4 mb-3 shadow-sm border-0 flex-fill">
            <div className="card-body">
                <h3 className="card-tile mb-5">{title}</h3>
                <div className="row row-cols-2">
                    {filteredExperiences.map((experience, index) => (
                        <div className="col mb-4" key={index}>
                            <div className="d-flex">
                                <i className="fa-solid fa-circle-check stack-icon"></i>
                                <div className="text-start ms-3">
                                    <h6>{experience.stack}</h6>
                                    <span>Experienced</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperiencesComponent;