import React from "react";
import "./style.css"

const Footer: React.FC = () => {
    return (
        <footer className="py-3 mt-4">
            <div className="d-flex justify-content-between align-items-center mx-3 mb-5">
                <div className="row ms-auto me-auto">
                    <h6 className="col">
                        <a className={`nav-link active text-secondary`} href="/">About</a>
                    </h6>
                    <h6 className="col">
                        <a className={`nav-link text-secondary`} href="#experience">Experience</a>
                    </h6>
                    <h6 className="col">
                        <a className={`nav-link text-secondary`} href="#projects">Projects</a>
                    </h6>
                    <h6 className="col">
                        <a className={`nav-link text-secondary`} href="#contact">Contact</a>
                    </h6>
                </div>
            </div>
            <div className="text-center">
                <span className="text-muted">© Paulo Roberto de Souza, 2024</span>
            </div>
        </footer>
    );
};

export default Footer;