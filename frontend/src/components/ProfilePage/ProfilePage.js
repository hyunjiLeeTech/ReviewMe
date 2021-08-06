import React from "react";
import { useState, useEffect } from "react";

import Profile from "./Profile";
import Loading from "../style/Loading";

import ProfileDataService from "../../services/ProfileDataService";
import "./Profile.css";

const ProfilePage = () => {

    const [profileItem, setProfileItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const userID = localStorage.getItem("user");
    console.log("Page User Id:", userID);

    useEffect(() => {
        ProfileDataService.getProfileByUserId(userID).then((profile) => {
            setProfileItem(profile);
        })
        setIsLoading(false);
    }, []);

    console.log("Page Profile:", profileItem);

    return (
        <div>
            {isLoading ? (<Loading />)
                : (
                    <Profile
                        profileItem={profileItem}
                        userID={userID}
                    />
                )}
        </div>
    );
};

export default ProfilePage;
