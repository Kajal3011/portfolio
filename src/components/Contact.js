import React from "react";

function Contact() {
  return (
    <section
      className="container my-5 "
      id="contact"
      style={{ maxWidth: "69rem" }}
    >
      <h3>Contact Us</h3>
      <div
        className="w-100 mb-3"
        style={{ height: "0.125rem", backgroundColor: "#800000" }}
      ></div>
      <form action="">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-3 form-control "
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-3 form-control "
        />
        <input
          type="text"
          placeholder="Subject"
          className="mb-3 form-control "
        />
        <textarea
          cols="30"
          rows="4"
          placeholder="Message"
          className="mb-3 form-control "
        />
        <button type="submit" className="btn btn-primary ">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
