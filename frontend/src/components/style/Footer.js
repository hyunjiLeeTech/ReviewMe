import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Link className="text-white" id="footer-link" to="/terms">
              Terms & Conditions
            </Link>
          </div>
          <div className="col-md-4">
            <img src={logo} alt="Review Me" />
          </div>
          <div className="col">
            <Link className="text-white" id="footer-link" to="/about">
              About Us
            </Link>
          </div>
          <div className="col">
            <Link className="text-white" id="footer-link" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
