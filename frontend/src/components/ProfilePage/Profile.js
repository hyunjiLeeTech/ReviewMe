import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Title from "../style/Title";
import "./Profile.css";

const Profile = () => {
  const dobExpression =
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  const emailExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [nickname, setNickname] = useState("JohnDoe12");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("11/13/1999");
  const [email, setEmail] = useState("johndoe@mail.com");

  const [validateFirstName, setValidateFirstName] = useState();
  const [validateLastName, setValidateLastName] = useState();
  const [validateNickname, setValidateNickname] = useState();
  const [validateDob, setValidateDob] = useState();
  const [validateEmail, setValidateEmail] = useState();

  const options = ["Male", "Female", "Other"];

  const validatedFirstNameHandler = () => {
    setValidateFirstName(firstName.trim().length > 0 ? true : false);
  };

  const validatedLastNameHandler = () => {
    setValidateLastName(lastName.trim().length > 0 ? true : false);
  };

  const validateNicknameHandler = () => {
    setValidateNickname(nickname.trim().length > 0 ? true : false);
  };

  const validateDobHandler = () => {
    setValidateDob(dob.match(dobExpression) ? true : false);
  };

  const validateEmailHandler = () => {
    setValidateEmail(email.match(emailExpression) ? true : false);
  };

  return (
    <div className="container light-style">
      <div className="card-title">
        <Title name="Account Settings" />
      </div>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links ">
              <Link
                className="list-group-item list-group-item-action active"
                data-toggle="list"
                to="/profile"
              >
                Profile
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                data-toggle="list"
                to="/resetpassword"
              >
                Reset Password
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="profile">
                <div className="card-body">
                  <form className="row g-3 mt-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Nickname</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nickname}
                          onChange={(event) => {
                            setNickname(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select"
                        value={gender}
                        onChange={(target) => {
                          setGender(target.value);
                        }}
                      >
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
                          onChange={(event) => {
                            setDob(event.target.value);
                          }}
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
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="text-center mt-3">
                  <button type="button" className="button mb-4">
                    Save changes
                  </button>
                  &nbsp;
                  <button type="button" className="button mb-4">
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
