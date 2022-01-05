import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAutenticatedUser, isAuthenticated, logout } from "../../../services/Auth";
import { adminRoutes, publicRoutes } from "../../../services/Routes";
import "./style.css";

const AppBar = function () {
  const [routes, setRoutes] = useState(routesPublicOrAdmin());
  const [user, setUser] = useState("");
  const location = useLocation();

  function routesPublicOrAdmin() {
    return isAuthenticated() ? adminRoutes : publicRoutes;
  }

  function menuLoggedUser() {
    return isAuthenticated() ? (
      <li className="nav-item dropdown">
        <button type="button" className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          {user}
        </button>
        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li><button type="button" className="dropdown-item btn btn-link" onClick={() => {
            logout();
            window.location.href = "/";
          }}>Logout</button></li>
        </ul>
      </li>
    ) : null;
  }

  useEffect(() => {
    setRoutes(routesPublicOrAdmin());
    setUser(getAutenticatedUser());
  }, [location]);

  useEffect(() => {
    const routesTemp = [...routes];

    routesTemp.forEach((route) => {
      if (route.pathname !== "/") {
        route.active = location.pathname.startsWith(route.pathname);
      } else {
        route.active = location.pathname === "/";
      }
    });

    setRoutes([...routesTemp]);
  }, [location])

  function createLinks() {
    return (
      <>
        {routes.map((route, index) => (
          <li className="nav-item" key={index}>
            <Link className={`nav-link ${route.active ? " active" : ""}`} aria-current="page" to={route.pathname}>{route.name}</Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand align-middle" href="/">
          <img src="https://personal-portfolio-files.s3.amazonaws.com/img/Untitled-1+(6).png" height="50" className="d-inline-block align-text-middle" alt="..." />
          &nbsp;&nbsp;&nbsp;Paulo Roberto de Souza
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {createLinks()}
            {menuLoggedUser()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
