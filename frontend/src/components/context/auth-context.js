import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});

const calculateRemainingTime = (exprirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(exprirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [popupIsShown, setpopupIsShown] = useState(false);
  const [userTypes, setUserTypes] = useState("");
  const [userID, setUserID] = useState("");
  const [detailsInfo, setDetailsInfo] = useState("");
  const [userIdInfo, setUserIdInfo] = useState("");

  const showModalHandler = () => {
    setpopupIsShown(true);
  };

  const closeModalHandler = () => {
    setpopupIsShown(false);
  };

  let userIsLoggedIn;
  if (!token) {
    userIsLoggedIn = false;
  }
  if (token) {
    userIsLoggedIn = true;
  }

  const logoutHandler = useCallback(() => {
    setToken(false);

    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userType");
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    setAdminLoggedIn(false);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  useEffect(() => {
    const type = Number(localStorage.getItem("userType"));
    setUserTypes(type);
  }, [userTypes]);
  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      setAdminLoggedIn(true);
    } else {
      setAdminLoggedIn(false);
    }
  }, [adminLoggedIn]);
  useEffect(() => {
    const userIdentification = Number(localStorage.getItem("user"));
    setUserIdInfo(userIdentification);
  }, [userIdInfo]);
  const loginHandler = (token, userType, userId, info, expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("userType", userType);
    localStorage.setItem("user", userId);
    if (userType === 2) {
      localStorage.setItem("admin", "false");
    }
    if (userType === 1) {
      localStorage.setItem("admin", "true");
      setAdminLoggedIn(true);
    }
    setUserID(Number(localStorage.getItem("user")));
    setToken(!!localStorage.getItem("token"));
    setUserTypes(Number(localStorage.getItem("userType")));
    setDetailsInfo(info);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  useEffect(() => {
    const type = Number(localStorage.getItem("userType"));
    setUserTypes(type);
  }, [userTypes]);
  console.log(userTypes);

  console.log(adminLoggedIn);
  useEffect(() => {
    const userIdentification = Number(localStorage.getItem("user"));
    setUserIdInfo(userIdentification);
  }, [userIdInfo]);
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler, userTypes]);
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    adminLoggedIn,
    popupIsShown,
    userID,
    userIdInfo,
    userTypes,
    detailsInfo,
    showModal: showModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
