import React from "react";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <section
      className="my-5 container"
      id="about"
      style={{ maxWidth: "69rem" }}
    >
      <div className="row">
        <div className="col-6">
          <h2 className=" text-secondary ">Hi! I am</h2>
          <h1>Kajal Kumari</h1>
          <TypeAnimation
            sequence={[
              "",
              500,
              "I am a Programmer.",
              1000,
              "I am a Frontend Developer.",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            style={{ color: "#990000" }}
          />
          <p className=" fs-5">
            I am a motivated and versatile individual, always eager to take new
            challenges. With a passion for learning I am dedicated to delivering
            high-quality results. With a positive attitude and a growth mindset,
            I am ready to make a meaningful contribution and achieve great
            things.
          </p>
          <button className="btn btn-primary ">View Resume</button>
        </div>
        <div className="col-6 mt-2">
          <img
            src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
            alt=""
            className=" d-block m-auto w-50 rounded-circle "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
