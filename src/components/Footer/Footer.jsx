import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="py-3 mt-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Sobre</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link px-2 text-muted">Blog</Link></li>
                <li className="nav-item"><Link to="/projetos" className="nav-link px-2 text-muted">Projetos</Link></li>
            </ul>
            <div className="d-flex justify-content-between align-items-center mx-4">
                <span className="text-muted">© Paulo Roberto de Souza, 2022</span>

                <ul className="nav justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://github.com/pauloprsdesouza"><i className="fab fa-github-alt fa-2x"></i></a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.linkedin.com/in/pauloprsdesouza"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://instagram.com/pauloprsdesouza"><i className="fab fa-instagram fa-2x"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;