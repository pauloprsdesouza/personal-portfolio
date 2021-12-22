import React from "react";
import { educationsDB } from "../../Database/Educations";
import { jobsDB } from "../../Database/Jobs";
import { skillsDB } from "../../Database/Skills";
import { whatIDoDB } from "../../Database/WhatIDo";
import About from "./About/About";
import Education from "./Educations/Education";
import Experience from "./Experience/Experience";
import Introduction from "./Indtroduction";
import SendEmail from "./SendEmail";
import Skill from "./Skill";
import "./style.css";

const Home = function () {

  return (
    <>
      <Introduction />
      <div className="container">
        <About />
        <Skill skills={skillsDB} teste={whatIDoDB}/>
        <Education educations={educationsDB} />
        <Experience jobs={jobsDB} />

        <div className="card background-contact">
          <div className="card-body">
            <div className="row justify-content-center pt-lg-5 px-lg-5">
              <div className="col-lg-7">
                <h1 className="card-title background-contact-title">Where do we start</h1>
                <h4 className="lead card-subtitle text-white mb-4">
                  Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals. I only work with two people each month so book a call now to avoid missing out.
                </h4>
                <SendEmail />
              </div>
              <div className="col-lg-3 text-center">
                <img src="https://personal-portfolio-files.s3.amazonaws.com/img/rocket-contact.png" className="image-fluid img-rocket-contact align-middle" width="130" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
