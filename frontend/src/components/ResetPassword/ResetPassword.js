import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Title from "../style/Title";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [validateCurrentPassword, setValidateCurrentPassword] = useState();
  const [validatePassword, setValidatePassword] = useState();
  const [validateConfirmedPassword, setValidateConfirmedPassword] = useState();

  const currentPasswordHandler = (event) => {
    setCurrentPassword(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };


  const validateCurrentPasswordHandler = () => {
    setValidateCurrentPassword(currentPassword.trim().length > 8 ? true : false);
  };

  const validatePasswordHandler = () => {
    setValidatePassword(password.trim().length > 8 ? true : false);
  };

  const validateConfirmedPasswordHandler = () => {
    setValidateConfirmedPassword(confirmedPassword === password ? true : false);
  };

  const onSaveChangesButtonHandler = (e) => {
    if (
      validatePassword === true &&
      validateConfirmedPassword === true
    ) {
      window.confirm("Password changed succesfully!")
    }
    else {

    }
  };

  return (
    <div className="container light-style mb-5">
      <div className="card-title mb-5 mt-5">
        <Title name="Account Settings" />
      </div>

      <div className="card reset-pw overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links ">
              <Link
                className="list-group-item list-group-item-action"
                data-toggle="list"
                to="/profile"
              >
                Profile
              </Link>
              <Link
                className="list-group-item list-group-item-action active"
                data-toggle="list"
                to="/resetpassword"
              >
                Reset Password
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="resetpassword">
                <div className="card-body">
                  <div className="card-body pb-2">
                    <form onSubmit={onSaveChangesButtonHandler}>

                      <div className="form-group">
                        <div
                          className={` ${validateCurrentPassword === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">Current password</label>
                          <input
                            type="password"
                            value={currentPassword}
                            onChange={currentPasswordHandler}
                            onBlur={validateCurrentPasswordHandler}
                            className="form-control"
                            required
                          />
                          {validateCurrentPassword === false ? (
                            <p>Password length should be greater than 8</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <div
                          className={` ${validatePassword === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">New password</label>
                          <input
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={passwordHandler}
                            onBlur={validatePasswordHandler}
                            required

                          />
                          {validatePassword === false ? (
                            <p>Password length should be greater than 8</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <div
                          className={` ${validateConfirmedPassword === false ? "invalid" : ""
                            }`}
                        >
                          <label className="form-label">Confirm password</label>
                          <input
                            type="password"
                            value={confirmedPassword}
                            className="form-control"
                            onChange={confirmedPasswordHandler}
                            onBlur={validateConfirmedPasswordHandler}
                            required

                          />
                          {validateConfirmedPassword === false ? (
                            <p>Passwords don't match. Re-enter the password</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                    </form>
                  </div>
                </div>

                <div className="text-center mt-3 mb-3">
                  <button
                    type="submit"
                    className="btn saveChange mb-4"
                  >
                    Save changes
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

export default ResetPassword;
