import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ContactUs from "./components/contactus/ContactUs";
import Header from "./components/style/Header";
import LogIn from "./components/registration/LogIn";
import Footer from "./components/style/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import SignUp from "./components/registration/SignUp";
import ForgotPassword from "./components/registration/ForgotPassword";
import Report from "./components/Report/Report";
import BookDetails from "./components/BookDetails/BookDetails";
import BookShelf from "./components/BookShelf/BookShelf";
import HomePage from "./components/homepage/HomePage";
import SearchResult from "./components/homepage/SearchResult";
import Profile from "./components/ProfilePage/Profile";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import TermCondition from "./components/TermCondition/TermCondition";
import NotFound from "./components/NotFoundPage/NotFound";
import ReportManager from "./components/ReportManager/ReportManager";
import ResetLink from "./components/registration/ResetPassword";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");

    if (userLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    if (email === "admin@reviewme.com") {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
      setAdminLoggedIn(true);
    } else {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setAdminLoggedIn(false);
  };
  return (
    <Router>
      <div className="App">
        <Header
          isAuth={isLoggedIn}
          isAdmin={adminLoggedIn}
          onLogout={logoutHandler}
        />

        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
            {adminLoggedIn && <Redirect to="/report-admin" />}
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/login">
            {!isLoggedIn && !adminLoggedIn && <LogIn onLogin={loginHandler} />}
            {isLoggedIn && <Redirect to="/" />}
            {adminLoggedIn && <Redirect to="/report-admin" />}
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetLink />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route exact path="/details/:id">
            <BookDetails />
          </Route>
          <Route exact path="/library">
            {isLoggedIn && <BookShelf title="Library" />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/wish-list">
            {isLoggedIn && <BookShelf title="Wish List" />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile">
            {isLoggedIn && <Profile />}
            {!isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/resetpassword">
            {isLoggedIn && <ResetPassword />}
            {!isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/report-admin">
            {isLoggedIn && adminLoggedIn && <ReportManager />}
            {isLoggedIn && !adminLoggedIn && <Redirect to="/" />}
            {!isLoggedIn && !adminLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/terms">
            <TermCondition />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>

        <Footer isAdmin={adminLoggedIn} />
      </div>
    </Router>
  );
}

export default App;
