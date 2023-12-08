import React from "react";
import { skills } from "../constant/skills";

function Skill() {
  return (
    <section
      className="container my-5"
      id="skill"
      style={{ maxWidth: "69rem" }}
    >
      <h3>Skills</h3>
      <div
        className="w-100 mb-3"
        style={{ height: "0.125rem", backgroundColor: "#800000" }}
      ></div>
      <div className=" d-flex flex-wrap justify-content-around ">
        {skills.map((skill) => {
          return (
            <div
              key={skill.title}
              className="m-2 me-3  d-flex flex-column align-items-center "
            >
              <div
                className=" border border-2 rounded-circle shadow-sm mb-2 bg"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="d-block p-3"
                />
              </div>

              <div className="small fw-medium ">{skill.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;
