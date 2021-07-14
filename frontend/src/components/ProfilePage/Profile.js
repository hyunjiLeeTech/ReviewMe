import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Title from "../style/Title";
import "./Profile.css";

const Profile = () => {

  const initialState = {
    firstName: "John",
    lastName: "Doe",
    nickname: "JohnDoe12",
    gender: "Male",
    dob: "11/13/1999",
    email: "johndoe@mail.com",
  };

  const [{ firstName, lastName, nickname, gender, dob, email }, setState] =
    useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const options = ["Male", "Female", "Other"];

  const [validateFirstName, setValidateFirstName] = useState(true);
  const [validateLastName, setValidateLastName] = useState(true);
  const [validateNickname, setValidateNickname] = useState(true);

  const validatedFirstNameHandler = () => {
    setValidateFirstName(firstName.trim().length >= 3 ? true : false);
  };

  const validatedLastNameHandler = () => {
    setValidateLastName(lastName.trim().length >= 3 ? true : false);
  };

  const validateNicknameHandler = () => {
    setValidateNickname(
      nickname.trim().length >= 3 && nickname.trim().length <= 10 ? true : false
    );
  };

  const onEditButtonHandler = () => {
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("nname").disabled = false;
    document.getElementById("edit").style.display = "none";
    document.getElementById("delete").style.display = "none";
    document.getElementById("save").style.display = "inline";
    document.getElementById("cancel").style.display = "inline";
  };

  const onDeleteButtonHandler = () => {
    const answer = window.confirm("Are you sure you want to delete your Account?")
  }

  const onSaveChangesButtonHandler = () => {
    if (
      validateFirstName === true &&
      validateLastName === true &&
      validateNickname === true
    ) {
      document.getElementById("fname").disabled = true;
      document.getElementById("lname").disabled = true;
      document.getElementById("nname").disabled = true;
      document.getElementById("edit").style.display = "inline";
      document.getElementById("delete").style.display = "inline";
      document.getElementById("save").style.display = "none";
      document.getElementById("cancel").style.display = "none";
    }
  };

  const onCancelButtonHandler = () => {
    clearState();
    document.getElementById("fname").disabled = true;
    document.getElementById("lname").disabled = true;
    document.getElementById("nname").disabled = true;
    document.getElementById("edit").style.display = "inline";
    document.getElementById("delete").style.display = "inline";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
  };

  return (
    <div className="container light-style mb-5">
      <h1 className="card-title mb-5 mt-5">
        <Title name="Account Settings" />
      </h1>
      <div className="card profile mt-5">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links ">
              <div className="color">
                <Link
                  className="list-group-item active"
                  data-toggle="list"
                  to="/profile"
                >
                  Profile
                </Link>
              </div>

              <Link
                className="list-group-item list-group-item-action"
                data-toggle="list"
                to="/resetpassword"
              >
                Reset Password
              </Link>
            </div>
          </div>

          <div className="col-md-9 pt-2">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="profile">
                <div className="card-body">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div
                          className={` ${validateFirstName === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">First Name</label>
                          <input
                            name="firstName"
                            id="fname"
                            type="text"
                            className="form-control"
                            value={firstName}
                            onBlur={validatedFirstNameHandler}
                            onChange={onChange}
                            disabled
                          />
                          {validateFirstName === false ? (
                            <p>Please enter your First Name</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div
                          className={` ${validateLastName === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">Last Name</label>
                          <input
                            name="lastName"
                            id="lname"
                            type="text"
                            className="form-control"
                            value={lastName}
                            onBlur={validatedLastNameHandler}
                            onChange={onChange}
                            disabled
                          />
                          {validateLastName === false ? (
                            <p>Please enter your Last Name</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div
                          className={` ${validateNickname === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">Nickname</label>
                          <input
                            name="nickname"
                            id="nname"
                            type="text"
                            className="form-control"
                            value={nickname}
                            onBlur={validateNicknameHandler}
                            onChange={onChange}
                            disabled
                          />
                          {validateNickname === false ? (
                            <p>Nickname must not be more than 15 characters</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select className="form-select" value={gender} disabled>
                        <option> {options[0]} </option>
                        <option> {options[1]} </option>
                        <option> {options[2]} </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dob}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          disabled
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="text-center mt-3">
                  <button
                    type="button"
                    id="edit"
                    className="btn edit mb-4"
                    onClick={onEditButtonHandler}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id="delete"
                    className="btn delete mb-4"
                    onClick={onDeleteButtonHandler}
                  >
                    Delete Account
                  </button>
                  <button
                    type="button"
                    id="save"
                    className="btn button2 mb-4"
                    onClick={onSaveChangesButtonHandler}
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    id="cancel"
                    className="btn button3 mb-4"
                    onClick={onCancelButtonHandler}
                  >
                    Cancel
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
