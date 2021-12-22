import React from "react";

const Footer = function () {
  return (
    <footer className="py-3 mt-4">
      <div className="d-flex justify-content-between align-items-center mx-4">
        <span className="text-muted">© Paulo Roberto de Souza, 2022</span>

        <ul className="nav justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://github.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-github-alt fa-2x" /></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.linkedin.com/in/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x" /></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://instagram.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x" /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
