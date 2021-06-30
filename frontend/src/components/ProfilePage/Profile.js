import React from 'react'
import './Profile.css';
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import { useState } from 'react';

const Profile = () => {

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [nickname, setNickname] = useState("JohnDoe12");
    const [gender, setGender] = useState("Male");
    const [dob, setDob] = useState("1999/11/11");
    const [email, setEmail] = useState("johndoe@mail.com");

    const options = ["Male", "Female", "Other"];

    return (
        <div className="container light-style">

            <h1 className="card-title">
                <center>Account Settings</center>
            </h1>

            <div className="card overflow-hidden">

                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links ">
                            <Link className="list-group-item list-group-item-action active" data-toggle="list" to="/profile">Profile</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="/resetpassword">Reset Password</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">

                            <div className="tab-pane fade active show" id="profile">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" value={firstName} onChange={(event) => {
                                                    setFirstName(event.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" value={lastName} onChange={(event) => {
                                                    setLastName(event.target.value);
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Nickname</label>
                                                <input type="text" className="form-control" value={nickname} onChange={(event) => {
                                                    setNickname(event.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Gender</label>
                                            <Dropdown
                                                className="dropdown" options={options} value={gender} onChange={(target) => {
                                                    setGender(target.value);
                                                }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="text" className="form-control" value={dob} onChange={(event) => {
                                                    setDob(event.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">E-mail</label>
                                                <input type="email" className="form-control" value={email} onChange={(event) => {
                                                    setEmail(event.target.value);
                                                }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="text-center mt-3">
                                    <button type="button" className="button mb-4">Save changes</button>&nbsp;
                                    <button type="button" className="button mb-4">Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Profile
