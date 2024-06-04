import React from "react";
import "./style.css"

const Footer: React.FC = () => {
    return (
        <footer className="py-3 mt-4">
            <div className="d-flex justify-content-between align-items-center mx-5 mb-5">
                <div className="row ms-auto me-auto">
                    <h3 className="col">
                        <a className={`nav-link active`} href="/">About</a>
                    </h3>
                    <h3 className="col">
                        <a className={`nav-link`} href="#experience">Experience</a>
                    </h3>
                    <h3 className="col">
                        <a className={`nav-link`} href="#projects">Projects</a>
                    </h3>
                    <h3 className="col">
                        <a className={`nav-link`} href="#contact">Contact</a>
                    </h3>
                </div>
            </div>
            <div className="text-center">
            <span className="text-muted">© Paulo Roberto de Souza, 2024</span>
            </div>
            
        </footer>
    );
};

export default Footer;