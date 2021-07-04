import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./Footer.css";

const Footer = (props) => {
  useEffect(() => {
    var windowWidth = $(window).width();
    if (windowWidth < 768) {
      $("#terms").text("Terms");
      $("#about").text("About");
      $("#contact").text("Contact");
    }
  });

  return (
    <footer
      style={{
        backgroundColor: props.isAdmin ? "#355070" : "#b56576",
      }}
      className="footer mt-auto py-3 text-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-5">
            <Link
              className="text-white bigWidth footer-link"
              to="/terms"
              id="terms"
            >
              {"Terms & Conditions"}
            </Link>
          </div>
          <div className="col-1 col-md-3">
            <img
              id="footerLogo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Review Me"
            />
          </div>
          <div className="col-4 col-md-2">
            <Link
              id="about"
              className="text-white bigWidth footer-link"
              to="/about"
            >
              <p>About Us</p>
            </Link>
          </div>
          <div className="col-4 col-md-2">
            <Link
              className="text-white bigWidth footer-link"
              id="contact"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
