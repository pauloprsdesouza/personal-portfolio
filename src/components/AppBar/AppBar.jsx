import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AppBar() {
  const [routes, setRoutes] = useState([
    {
      pathname: "/",
      name: "Sobre",
      active: true
    },
    {
      pathname: "/blog",
      name: "Blog",
      active: false
    },
    {
      pathname: "/projetos",
      name: "Projetos",
      active: false
    }
  ]);

  function checkRoute(currentRoute) {
    routes.forEach((route) => {
      if(route !== currentRoute){
        route.active = false;
      }
    })

    currentRoute.active = !currentRoute.active;
    setRoutes([...routes]);
  }

  function createLinks() {
    return (
      <>
        {routes.map((route, index) => (
          <li className="nav-item" key={index}>
            <Link className={`nav-link ${route.active ? " active" : ""}`} aria-current="page" to={route.pathname} onClick={() => { checkRoute(route) }}>{route.name}</Link>
          </li>
        ))}
      </>
    )
  }

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
            {createLinks()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppBar;