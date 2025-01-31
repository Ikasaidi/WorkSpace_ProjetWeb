import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
          <Link to="/"> Mon Projet</Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <Link to="/"> Home</Link> <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/listAxios">ListUsers1</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/listFlech">ListUsers2</Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item">
                    <Link to="/options/1">Inscription</Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item">
                    <Link to="/options/2">Modification</Link>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>

                <li>
                  <a class="dropdown-item">
                    <Link to="/options/3">Suppression</Link>
                  </a>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
