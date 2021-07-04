import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  if (props.isAdmin) {
  }
  return (
    <nav
      style={{ backgroundColor: props.isAdmin ? "#355070" : "#b56576" }}
      className="navbar navbar-expand-lg navbar-dark "
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Review Me"
          />
        </NavLink>

        <button
          className="navbar-toggler navbar-toggler-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBar"
          aria-controls="navbarBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarBar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!props.isAdmin && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/wish-list">
                  Wish List
                </NavLink>
              </li>
            )}
            {!props.isAdmin && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/library">
                  Library
                </NavLink>
              </li>
            )}
            {props.isAdmin && props.isAuth && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/report-admin">
                  Reports
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {!props.isAuth && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
            {!props.isAuth && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            )}
            {props.isAuth && (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
            {props.isAuth && (
              <li
                className="nav-item logoutButton"
                style={{
                  backgroundColor: props.isAdmin ? "#355070" : "#b56576",
                }}
                onClick={props.onLogout}
              >
                <NavLink id="head-link" className="nav-link" to="/homepage">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
