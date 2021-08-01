import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState, useEffect, useReducer, useContext } from "react";

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
import BookShelf from "./components/BookShelf/BookShelf";
import HomePage from "./components/homepage/HomePage";
import SearchResult from "./components/homepage/SearchResult";
import Profile from "./components/ProfilePage/Profile";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import TermCondition from "./components/TermCondition/TermCondition";
import NotFound from "./components/NotFoundPage/NotFound";
import ReportManager from "./components/ReportManager/ReportManager";
import ResetLink from "./components/registration/ResetPassword";
import AuthContext from "./components/context/auth-context";
import ManageBookShelf from "./components/BookShelf/ManageBookShelf";
import Library from "./components/BookShelf/Library";
import Wishlist from "./components/BookShelf/Wishlist";
import ManageWishlist from "./components/BookShelf/ManageWishlist";
import ManageLibrary from "./components/BookShelf/ManageLibrary";

import WishListDataServices from "./services/WishListDataServices";
import LibraryDataServices from "./services/LibraryDataServices";

function App() {
  const authCtx = useContext(AuthContext);
  const [library, setLibrary] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (authCtx.userTypes === 2) {
      getWishlist();
      getLibrary();
    }
  }, []);
  let userType = authCtx.userTypes;
  let detailsInfo = authCtx.detailsInfo;

  console.log(authCtx.userTypes);
  console.log(detailsInfo);
  console.log(authCtx.userIdInfo);

  const getWishlist = () => {
    if (authCtx.userTypes === 2) {
      WishListDataServices.getWishListByUseId(authCtx.userIdInfo).then(
        (wishlist) => {
          for (let i = 0; i < wishlist.length; i++) {
            wishlist[i].isSelected = false;
          }
          setWishlist(wishlist);
          console.log(wishlist);
        }
      );
    }
  };

  const getManageBookShelf = (type, index) => {
    if (type === 1) {
      let libraryItems = library;
      libraryItems[index].isSelected = !libraryItems[index].isSelected;
      setLibrary(libraryItems);
    } else if (type === 2) {
      let wishlistItems = wishlist;
      wishlistItems[index].isSelected = !wishlistItems[index].isSelected;
      setWishlist(wishlistItems);
    }

    forceUpdate();
  };

  const getLibrary = () => {
    if (authCtx.userTypes === 2) {
      LibraryDataServices.getLibraryByUseId(authCtx.userIdInfo).then(
        (library) => {
          for (let i = 0; i < library.length; i++) {
            library[i].isSelected = false;
          }
          setLibrary(library);
        }
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
            {authCtx.adminLoggedIn && <Redirect to="/report-admin" />}
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
              getWishlist={getWishlist}
              getLibrary={getLibrary}
              userType={authCtx.userTypes}
              userId={authCtx.userIdInfo}
              wishlist={wishlist}
              library={library}
            ></BookDetailsPage>
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
