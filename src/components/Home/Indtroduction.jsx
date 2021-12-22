import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import "./style.css";

const Introduction = function () {

  return (
    <div className="card background-teste mb-4">
      <div className="card-body d-flex flex-row align-content-center align-items-center">
        <div className="container px-5">
          <h1 className="section-title-lg mb-3">about.</h1>
          <div className="d-flex flex-column flex-lg-row gap-3">
            <div className="mb-3 order-2 order-lg-0">
              <h4 className="mb-4">Hi, 👋 there! I'm</h4>
              <h1 className="section-title text-purple">Paulo Roberto de Souza</h1>
              <h6 className="text-muted mb-4">FULL STACK WEB AND MOBILE DEVELOPER</h6>
              <p className="card-text mb-5">
                I enjoy to develop software in order to help people on solve problems through the use innovative ideas improving decision making.
              </p>
              <div className="d-grid gap-2 d-sm-block">
                <a className="btn btn-outline-light btn-lg"
                  href="https://personal-portfolio-files.s3.amazonaws.com/img/profile-contact.vcf"
                  download="contact.vcf"
                  rel="noopener noreferrer"
                >Save Contact</a>
              </div>
            </div>
            <div className="mb-3 text-center order-1 order-lg-1">
              <ul className="nav list-unstyled d-flex flex-lg-column justify-content-between">
                <li className="mb-4">
                  <a className="text-white text-warning-hover" href="https://github.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-github-alt fa-3x" /></a>
                </li>
                <li className="mb-4">
                  <a className="text-white text-warning-hover" href="https://www.linkedin.com/in/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x" /></a>
                </li>
                <li className="mb-4">
                  <a className="text-white text-warning-hover" href="https://instagram.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x" /></a>
                </li>
                <li>
                  <a className="text-white text-warning-hover" href="https://api.whatsapp.com/send?phone=5579999733237&text=Hi Paulo, how are you doing? Do you have time for a meet?" rel="noopener noreferrer"><i className="fab fa-whatsapp fa-3x"></i></a>
                </li>
              </ul>
            </div>
            <img className="img-cirle-lg img-fluid card-shadow mb-3 order-0 order-lg-2" src="https://personal-portfolio-files.s3.amazonaws.com/img/photo-introduction.jpeg" alt="Paulo Roberto de Souza" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Introduction;
