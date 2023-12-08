import React from "react";
import { projects } from "../constant/projects";

function Project() {
  return (
    <section
      className="container my-5"
      id="project"
      style={{ maxWidth: "69rem" }}
    >
      <h3>Projects</h3>
      <div
        className="w-100 mb-3"
        style={{ height: "0.125rem", backgroundColor: "#800000" }}
      ></div>
      <div className="d-flex flex-wrap justify-content-evenly ">
        {projects.map((p) => {
          return (
            <div
              key={p.id}
              className="d-flex flex-column align-items-center justify-content-between shadow rounded m-3 p-3"
              style={{ height: "25rem", width: "20rem" }}
            >
              <img
                src={p.img}
                alt=""
                height="150px"
                width="150px"
                className="w-100 rounded "
              />
              <h4 className="mb-0">{p.title}</h4>
              <p className="mb-0">{p.description}</p>
              <div className="d-flex flex-wrap ">
                {p.tags?.map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="px-2 me-2 my-1 rounded bg-secondary-subtle small"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div>
                <a
                  href={p.demo}
                  className="btn btn-dark me-2 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={p.code}
                  className="btn btn-primary ms-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
