import React from "react";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import twitter from "../images/icons/twitter.svg";

function Footer() {
  return (
    <section className=" py-4 bg-white">
      <div
        className="container d-flex justify-content-between align-items-center "
        style={{ maxWidth: "69rem" }}
      >
        <h5 className=" m-0">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-decoration-none"
            style={{ color: "#990000" }}
          >
            Kajal Kumari
          </a>
        </h5>
        <div>
          <a
            href="http://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img src={github} alt="social-media-icon" width={"25px"} />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img src={linkedin} alt="social-media-icon" width={"25px"} />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <img src={twitter} alt="social-media-icon" width={"25px"} />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Footer;
