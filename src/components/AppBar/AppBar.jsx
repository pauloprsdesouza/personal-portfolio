import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AppBar = function () {
  const [routes, setRoutes] = useState([
    {
      pathname: "/",
      name: "About",
      active: true,
    },
    {
      pathname: "/blog",
      name: "Blog",
      active: false,
    },
    {
      pathname: "/projects",
      name: "Projects",
      active: false,
    },
    {
      pathname: "/papers",
      name: "Call for Papers",
      active: false,
    },
  ]);

  function checkRoute(currentRoute) {
    routes.forEach((route) => {
      if (route !== currentRoute) {
        route.active = false;
      }
    });

    if (currentRoute.pathname !== window.location.pathname) {
      currentRoute.active = !currentRoute.active;
      setRoutes([...routes]);
    }
  }

  function createLinks() {
    return (
      <>
        {routes.map((route, index) => (
          <li className="nav-item" key={index}>
            <Link className={`nav-link ${route.active ? " active" : ""}`} aria-current="page" to={route.pathname} onClick={() => { checkRoute(route); }}>{route.name}</Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://seeklogo.com/images/P/performing-right-society-for-music-logo-B63C4A6960-seeklogo.com.png" height="50" className="d-inline-block align-text-middle" alt="..." />
          Paulo Roberto de Souza 
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {createLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
