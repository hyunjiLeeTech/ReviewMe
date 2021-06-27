import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Link className="text-white" id="footer-link" to="/">
              Terms & Conditions
            </Link>
          </div>
          <div className="col-4">
            <span> Review Me</span>
          </div>
          <div className="col">
            <Link className="text-white" id="footer-link" to="/">
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
