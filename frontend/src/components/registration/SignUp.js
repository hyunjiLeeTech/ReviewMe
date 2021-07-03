import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Title from "../style/Title";
import "./SignUp.css";

const dateRegex = RegExp(
  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
);

const SignUp = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [providedConfirmPassword, setProvidedConfirmPassword] = useState("");
  const [providedFirstName, setProvidedFirstName] = useState("");
  const [providedLastName, setProvidedLastName] = useState("");
  const [providedNickName, setProvidedNickName] = useState("");
  const [providedGender, setProvidedGender] = useState("");
  const [providedDateOfBirth, setProvidedDateOfBirth] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();
  const [validatedConfirmPassword, setValidConfirmPassword] = useState();
  const [validatedFirstName, setValidFirstName] = useState();
  const [validatedLastName, setValidLastName] = useState();
  const [validatedNickName, setValidNickName] = useState();
  const [validatedGender, setValidGender] = useState();
  const [validatedDateOfBirth, setValidDateOfBirth] = useState();

  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setProvidedConfirmPassword(event.target.value);
  };

  const firstNameHandler = (event) => {
    setProvidedFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setProvidedLastName(event.target.value);
  };
  const nickNameHandler = (event) => {
    setProvidedNickName(event.target.value);
  };

  const genderHandler = (event) => {
    setProvidedGender(event.target.value);
  };
  const dateOfBirthHandler = (event) => {
    setProvidedDateOfBirth(event.target.value);
  };

  useEffect(() => {
    setFormIsValid(
      providedEmail.includes("@") &&
        providedPassword.trim().length >= 8 &&
        providedFirstName.trim().length >= 3 &&
        providedLastName.trim().length >= 3 &&
        providedNickName.trim().length >= 3 &&
        providedDateOfBirth.match(dateRegex) &&
        providedGender &&
        providedConfirmPassword === providedPassword
    );
  }, [
    providedEmail,
    providedPassword,
    providedFirstName,
    providedLastName,
    providedNickName,
    providedDateOfBirth,
    providedGender,
    providedConfirmPassword,
  ]);

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length > 8);
  };

  const validateConfirmPasswordHandler = () => {
    setValidConfirmPassword(providedConfirmPassword === providedPassword);
  };

  const validateFirstNameHandler = () => {
    setValidFirstName(providedFirstName.trim().length > 3);
  };

  const validateLastNameHandler = () => {
    setValidLastName(providedLastName.trim().length > 3);
  };
  const validateNickNameHandler = () => {
    setValidNickName(providedNickName.trim().length > 3);
  };

  const validateGenderHandler = () => {
    setValidGender(providedGender);
  };
  const validateDateOfBirthHandler = () => {
    setValidDateOfBirth(providedDateOfBirth.match(dateRegex));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup mt-5">
      <div className="text-center mt-5">
        <Title name="Welcome" />
        <p className="card-subtitle">
          Come and join our community! Already have an account?{" "}
          <Link to="/login" className="card-link">
            Login Here
          </Link>
        </p>
      </div>
      <form className="row g-3 mt-3" onSubmit={submitHandler}>
        <div className="col-md-6 ">
          <div
            className={`control ${
              validatedFirstName === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={providedFirstName}
              onChange={firstNameHandler}
              onBlur={validateFirstNameHandler}
              autoFocus
              required
            />
            {validatedFirstName === false && (
              <p>Please provide your first name</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`control ${
              validatedLastName === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={providedLastName}
              onChange={lastNameHandler}
              onBlur={validateLastNameHandler}
              required
            />
            {validatedLastName === false && (
              <p>Please provide your last name</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`control ${
              validatedNickName === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="nickName" className="form-label">
              Nickname
            </label>
            <input
              type="text"
              className="form-control"
              id="nickName"
              value={providedNickName}
              onChange={nickNameHandler}
              onBlur={validateNickNameHandler}
              required
            />
            {validatedNickName === false && <p>Please provide your nickname</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`control ${validatedGender === false ? "invalid" : ""}`}
          >
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-select"
              value={providedGender}
              onChange={genderHandler}
              onBlur={validateGenderHandler}
              required
            >
              <option defaultValue>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
            {validatedGender === false && <p>Please provide your gender</p>}
          </div>
        </div>
        <div className="col-12">
          <div
            className={`control ${
              validatedDateOfBirth === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              className="form-control"
              id="dateOfBirth"
              placeholder="MM/DD/YYYY"
              value={providedDateOfBirth}
              onChange={dateOfBirthHandler}
              onBlur={validateDateOfBirthHandler}
              required
            />
          </div>
        </div>
        <div className="col-12">
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
              value={providedEmail}
              onChange={emailHandler}
              onBlur={validateEmailHandler}
              required
            />
            {validatedEmail === false && <p>Please provide a valid email</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`control ${
              validatedPassword === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
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
        <div className="col-md-6">
          <div
            className={`control ${
              validatedConfirmPassword === false ? "invalid" : ""
            }`}
          >
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={providedConfirmPassword}
              onChange={confirmPasswordHandler}
              onBlur={validateConfirmPasswordHandler}
              required
            />
            {validatedConfirmPassword === false && (
              <p>Seems like the password does not match</p>
            )}
          </div>
        </div>
        <div className="text-center mb-5">
          <button type="submit" className="btn signup" disabled={!formIsValid}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
