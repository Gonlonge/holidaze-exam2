import React from "react";
import { Link } from "react-router-dom";
// import filter from "../../images/filter.svg";
import user from "../../images/person.svg";
import home from "../../images/home.svg";
import destination from "../../images/holiday-village.svg";
import FilterMenu from "./FilterMenu";

function Nav() {
  return (
    <div>
      <nav className="nav-container separator">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <p className="none-margin-center">
                <img className="navbar-icon" src={home} alt="home" />
              </p>
              Home
            </Link>
          </li>
          {/* <li className="ms-4">
            <Link to="/FilterPage">
              <p className="none-margin-center">
                <img className="navbar-icon" src={filter} alt="Logo" />
              </p>
              Filter
            </Link>
          </li> */}
          <FilterMenu />
          <li className="ms-4">
            <Link to="/Destination">
              <p className="none-margin-center">
                <img
                  className="navbar-icon"
                  src={destination}
                  alt="destination"
                />
              </p>
              Destination
            </Link>
          </li>
          <li className="ms-4">
            <Link to="/LogIn">
              <p className="none-margin-center">
                <img className="navbar-icon" src={user} alt="user" />
              </p>
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
