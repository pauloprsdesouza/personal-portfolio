import React from 'react';
import { Link } from 'react-router-dom';

function AppBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
              Paulo Roberto de Souza
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/submission">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Minhas Avaliações</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppBar;