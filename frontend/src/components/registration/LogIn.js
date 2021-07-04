import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Title from "../style/Title";

import "./LogIn.css";

const LogIn = (props) => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();

  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length >= 8);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(providedEmail, providedPassword);
    if (providedEmail === "admin@reviewme.com") {
      return <Redirect to="/homepage" />;
    }
  };

  return (
    <div className="login mt-5">
      <div className="mt-5 text-center">
        <Title name="Welcome" />
        <p className="card-subtitle">
          Don't have an account? Join us{" "}
          <Link to="/signup" className="card-link">
            Here
          </Link>
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="d-flex justify-content-center">
          <div className="col-8 mb-4 mt-3">
            <div
              className={`control ${validatedEmail === false ? "invalid" : ""}`}
            >
              <label className="form-label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={providedEmail}
                onChange={emailHandler}
                onBlur={validateEmailHandler}
                autoFocus
                required
              />
              {validatedEmail === false && <p>Please provide correct email</p>}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-8 mb-4">
            <div
              className={`control ${
                validatedPassword === false ? "invalid" : ""
              }`}
            >
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={providedPassword}
                onChange={passwordHandler}
                onBlur={validatePasswordHandler}
                required
              />
              {validatedPassword === false && (
                <p>Password should contain at least 8 characters</p>
              )}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rememberMe">
                {" "}
                Remember me{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMe"
              />
            </div>
          </div>
          <div className="col">
            <Link className="link-forgot" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-center">
          <button type="submit" className="btn login mb-4">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
