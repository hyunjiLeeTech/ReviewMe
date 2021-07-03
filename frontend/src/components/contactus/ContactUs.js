import React from "react";

import emailjs from "emailjs-com";

import Title from "../style/Title";
import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qrji4yj",
        "template_cmw8m1u",
        e.target,
        "user_L4wdI7x3ofk4My6q8yZUG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="card contact mt-5">
      <div className="card-body">
        <div className="mb-4 text-center">
          <Title name="Contact Us" />
          <p className="card-subtitle">
            Please include your name, email and message and we contact you as
            soon as possible.
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="mb-4">
            <input type="hidden" name="contact_number" />
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              autoFocus
              name="from_name"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" name="user_email" />
          </div>
          <label className="form-label">Message</label>
          <div className="mb-4">
            <textarea className="form-control" name="message" rows="6" />
          </div>
          <div className="d-flex justify-content-center mb-5">
            <button className="btn contact" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
