import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
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
  );
}

export default Nav;
