import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <Link class="navbar-brand fw-bold" to="/">
          Reddit clone
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/new" className="btn btn-secondary">
              +
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
