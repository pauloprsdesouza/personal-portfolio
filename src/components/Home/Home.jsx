import React from "react";
import { educationsDB } from "../../Database/Educations";
import { jobsDB } from "../../Database/Jobs";
import { whatIDoDB } from "../../Database/WhatIDo";
import About from "./About/About";
import Education from "./Educations/Education";
import Experience from "./Experience/Experience";
import Introduction from "./Indtroduction";
import Skill from "./Skill";
import "./style.css";
import Contact from "./Contact/Contact";
import Course from "./Courses/Course";
import { coursesDB } from "../../Database/Courses";

const Home = function () {

  return (
    <>
      <Introduction />
      <div className="container">
        <About />
        <Skill skills={whatIDoDB} />
        <Education educations={educationsDB} />
        <Experience jobs={jobsDB} />
        <Course courses={coursesDB}/>
        <Contact />
      </div>
    </>
  );
};

export default Home;
