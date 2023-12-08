import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm  mb-3 sticky-md-top  ">
      <div className="container" style={{ maxWidth: "69rem" }}>
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#skill">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com/Kajal3011"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
