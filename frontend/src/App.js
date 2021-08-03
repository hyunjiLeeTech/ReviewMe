import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React, { useContext } from "react";

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
import BookDetailsPage from "./components/BookDetails/BookDetailsPage";
import HomePage from "./components/homepage/HomePage";
import SearchResult from "./components/homepage/SearchResult";
import Profile from "./components/ProfilePage/Profile";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import TermCondition from "./components/TermCondition/TermCondition";
import NotFound from "./components/NotFoundPage/NotFound";
import ReportManager from "./components/ReportManager/ReportManager";
import ResetLink from "./components/registration/ResetPassword";
import AuthContext from "./components/context/auth-context";
import Library from "./components/BookShelf/Library";
import Wishlist from "./components/BookShelf/Wishlist";
import ManageWishlist from "./components/BookShelf/ManageWishlist";
import ManageLibrary from "./components/BookShelf/ManageLibrary";

function App() {
  const authCtx = useContext(AuthContext);
  let userType = authCtx.userTypes;
  let detailsInfo = authCtx.detailsInfo;

  console.log(authCtx.userTypes);
  console.log(detailsInfo);
  console.log(authCtx.userIdInfo);

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
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
            {!authCtx.isLoggedIn && !authCtx.adminLoggedIn && <LogIn />}
            {authCtx.isLoggedIn && <Redirect to="/" />}
            {authCtx.adminLoggedIn && <Redirect to="/report-admin" />}
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
            <BookDetailsPage
              userType={authCtx.userTypes}
              userId={authCtx.userIdInfo}
            />
          </Route>
          <Route exact path="/library">
            {authCtx.isLoggedIn && <Library userId={authCtx.userIdInfo} />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/library/manage">
            {authCtx.isLoggedIn && (
              <ManageLibrary userId={authCtx.userIdInfo} />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/wish-list">
            {authCtx.isLoggedIn && <Wishlist userId={authCtx.userIdInfo} />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/wishlist/manage">
            {authCtx.isLoggedIn && (
              <ManageWishlist userId={authCtx.userIdInfo} />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile">
            {authCtx.isLoggedIn && <Profile />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/resetpassword">
            {authCtx.isLoggedIn && <ResetPassword />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/report-admin">
            {authCtx.isLoggedIn && authCtx.adminLoggedIn && <ReportManager />}
            {authCtx.isLoggedIn && !authCtx.adminLoggedIn && (
              <Redirect to="/" />
            )}
            {!authCtx.isLoggedIn && !authCtx.adminLoggedIn && (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/terms">
            <TermCondition />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
