import React from "react";
import { Link } from "react-router-dom";
import "../../scss/nav.scss";

function Nav() {
  return (
    <div>
      <nav className="nav-container separator">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FilterPage">Filter</Link>
          </li>
          <li>
            <Link to="/Destination">Destination</Link>
          </li>
          <li>
            <Link to="/LogInOut">LogInOut</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
