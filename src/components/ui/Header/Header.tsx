import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const AppBar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Paulo Roberto de Souza</a>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active`} href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`} href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`} href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;