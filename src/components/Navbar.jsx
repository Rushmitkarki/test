import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container mt-2"></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            Ruhsmit <span className="text-danger">Karki</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>

            <Link to={"/login"} class="btn btn-primary" type="submit">
              Login
            </Link>
            <Link to={"/Register"} class="btn btn-success ms-2" type="submit">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
