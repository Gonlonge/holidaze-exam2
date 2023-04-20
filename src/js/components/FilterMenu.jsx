import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Collapse } from "react-bootstrap";
import filter from "../../images/filter.svg";
import Search from "./Search";

function FilterMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="ms-4" ref={wrapperRef}>
        <Button
          className="background-color-button navbar-toggler"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <div className="text-center">
            <img
              className="navbar-icon"
              src={filter}
              alt="Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <a>Filter</a>
        </Button>
        <Collapse in={open}>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Search />
                {/* <a href="#">Home</a> */}
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    </nav>
  );
}

export default FilterMenu;
