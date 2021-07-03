import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [nickname, setNickname] = useState("JohnDoe12");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("11/13/1999");
  const [email, setEmail] = useState("johndoe@mail.com");

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
    setValidateNickname((nickname.trim().length >= 3 && nickname.trim().length <= 15) ? true : false);
  };

  const editButtonHandler = () => {
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("nname").disabled = false;
    document.getElementById("edit").disabled = true;
    document.getElementById("save").disabled = false;
  }

  const saveChangesButtonHandler = () => {

    if (validateFirstName === true && validateLastName === true && validateNickname === true) {
      document.getElementById("fname").disabled = true;
      document.getElementById("lname").disabled = true;
      document.getElementById("nname").disabled = true;
      document.getElementById("edit").disabled = false;
      document.getElementById("save").disabled = true;
    }

  }

  return (

    <div className="container light-style">
      <h1 className="card-title">
        <center>Account Settings</center>
      </h1>
      <div className="card">

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

          <div className="col-md-9">
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
                            id="fname"
                            type="text"
                            className="form-control"
                            value={firstName}
                            onBlur={validatedFirstNameHandler}
                            onChange={(event) => {
                              setFirstName(event.target.value);
                            }}
                            disabled
                          />
                          {validateFirstName === false ? <p>Please enter your First Name</p> : ""}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div className={` ${validateLastName === false ? "invalid" : ""
                          }`}
                        >
                          <label className="form-label">Last Name</label>
                          <input
                            id="lname"
                            type="text"
                            className="form-control"
                            value={lastName}
                            onBlur={validatedLastNameHandler}
                            onChange={(event) => {
                              setLastName(event.target.value);
                            }}
                            disabled
                          />
                          {validateLastName === false ? <p>Please enter your Last Name</p> : ""}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div className={` ${validateNickname === false ? "invalid" : ""
                          }`}
                        >
                          <label className="form-label">Nickname</label>
                          <input
                            id="nname"
                            type="text"
                            className="form-control"
                            value={nickname}
                            onBlur={validateNicknameHandler}
                            onChange={(event) => {
                              setNickname(event.target.value);
                            }}
                            disabled
                          />
                          {validateNickname === false ? <p>Nickname must not be more than 15 characters</p> : ""}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select"
                        value={gender}
                        disabled
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
                  <button type="button" id="edit" className="button1 mb-4"
                    onClick={editButtonHandler} >
                    Edit
                  </button>
                  <button type="button" id="save" className="button2 mb-4"
                    onClick={saveChangesButtonHandler}>
                    Save changes
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div >

  );
}

export default Profile;
