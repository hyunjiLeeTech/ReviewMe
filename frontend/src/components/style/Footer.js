import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <a className="text-white" id="footer-link" href="/">
              Terms & Conditions
            </a>
          </div>
          <div className="col-4">
            <span> Review Me</span>
          </div>
          <div className="col">
            <a className="text-white" id="footer-link" href="/">
              About Us
            </a>
          </div>
          <div className="col">
            <a className="text-white" id="footer-link" href="/">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
