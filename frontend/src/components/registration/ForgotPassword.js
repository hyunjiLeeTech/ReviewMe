import React, { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../style/Title";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [validatedEmail, setValidEmail] = useState();

  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-center">
          <div className="card-title">
            <Title name="Forgot Password?" />
          </div>
          <h6 className="card-subtitle mx-2">
            {" "}
            Please provide the email you enter to login{" "}
          </h6>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-4 mt-4">
            <div
              className={`control ${validatedEmail === false ? "invalid" : ""}`}
            >
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoFocus
                value={providedEmail}
                onChange={emailHandler}
                onBlur={validateEmailHandler}
                required
              />
              {validatedEmail === false && (
                <p>Please provide a correct email</p>
              )}
            </div>
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
          <div className="text-center">
            <Link to="/login">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
