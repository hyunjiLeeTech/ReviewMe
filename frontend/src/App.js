import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ContactUs from "./components/contactus/ContactUs";
import Header from "./components/style/Header";
import Footer from "./components/style/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
