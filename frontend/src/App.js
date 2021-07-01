import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ContactUs from "./components/contactus/ContactUs";
import Header from "./components/style/Header";
import LogIn from "./components/registration/LogIn";
import Footer from "./components/style/Footer";
import SignUp from "./components/registration/SignUp";
import ForgotPassword from "./components/registration/ForgotPassword";
import Report from "./components/Report/Report";
import BookDetails from "./components/BookDetails/BookDetails";
import BookShelf from "./components/BookShelf/BookShelf";
import HomePage from "./components/homepage/HomePage";
import SearchResult from "./components/homepage/SearchResult";

function App() {
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
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route exact path="/details/:id">
            <BookDetails />
          </Route>
          <Route exact path="/library">
            <BookShelf title="Library" />
          </Route>
          <Route exact path="/wish-list">
            <BookShelf title="Wish List" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
