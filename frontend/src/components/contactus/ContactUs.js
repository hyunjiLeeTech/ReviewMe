import React from "react";

import emailjs from "emailjs-com";
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
    <div className="card">
      <div className="card-body">
        <div className="mt-4 text-center">
          <h1 className="card-title">Contact Us</h1>
          <p className="card-subtitle">
            Please include your name, email and message and we contact you as
            soon as possible.
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="mb-4">
            <input type="hidden" name="contact_number" />
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="from_name" />
          </div>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" name="user_email" />
          </div>
          <label className="form-label">Message</label>
          <div className="mb-4">
            <textarea className="form-control" name="message" rows="6" />
          </div>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
