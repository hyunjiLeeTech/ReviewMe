import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

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

import WishListDataServices from "./services/WishListDataServices";
import LibraryDataServices from "./services/LibraryDataServices";

function App() {
  const authCtx = useContext(AuthContext);
  const [library, setLibrary] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (authCtx.userTypes === 2) {
      getWishlist();
      getLibrary();
      console.log(wishlist);
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
          console.log(wishlist);
          for (let i = 0; i < wishlist.length; i++) {
            wishlist[i].isSelected = false;
          }
          console.log(wishlist);
          setWishlist(wishlist);
        }
      );
    }
  };

  const getManageBooksShelf = (type, index) => {
    if (type === "Library") {
      let libraryItems = library;
      libraryItems[index].isSelected = !libraryItems[index].isSelected;
      setLibrary(libraryItems);
    } else if (type === "Wishlist") {
      let wishlistItems = library;
      wishlistItems[index].isSelected = !wishlistItems[index].isSelected;
      setLibrary(wishlistItems);
    }
    // if (authCtx.userTypes === 2) {
    //   WishListDataServices.getWishListByUseId(authCtx.userIdInfo).then(
    //     (wishlist) => {
    //       console.log(wishlist);
    //       setWishlist(wishlist);
    //     }
    //   );
    // }
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
            {authCtx.isLoggedIn && (
              <BookShelf
                title="Library"
                items={library}
                getBookshelf={getLibrary}
              />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/library/manage">
            {authCtx.isLoggedIn && (
              <ManageBookShelf
                title="Manage Library"
                items={library}
                getBookshelf={getLibrary}
              />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/wish-list">
            {authCtx.isLoggedIn && (
              <BookShelf
                title="Wish List"
                items={wishlist}
                getBookshelf={getWishlist}
              />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route exact path="/wishlist/manage">
            {authCtx.isLoggedIn && (
              <ManageBookShelf
                title="Manage Wish List"
                items={wishlist}
                getBookshelf={getWishlist}
              />
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
