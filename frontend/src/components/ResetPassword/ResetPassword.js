import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Title from "../style/Title";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState();
  const [validateConfirmedPassword, setValidateConfirmedPassword] = useState();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setValidatePassword(password.trim().length > 8 ? true : false);
  };

  const validateConfirmedPasswordHandler = () => {
    setValidateConfirmedPassword(confirmedPassword === password ? true : false);
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
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                      <div
                        className={` ${
                          validatePassword === false ? "invalid" : ""
                        }`}
                      >
                        <label className="form-label">New password</label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={passwordHandler}
                          onBlur={validatePasswordHandler}
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
                        className={` ${
                          validateConfirmedPassword === false ? "invalid" : ""
                        }`}
                      >
                        <label className="form-label">Confirm password</label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={confirmedPasswordHandler}
                          onBlur={validateConfirmedPasswordHandler}
                        />
                        {validateConfirmedPassword === false ? (
                          <p>Passwords don't match. Re-enter the password</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3 mb-3">
                  <button type="button" className="btn saveChange mb-4">
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
