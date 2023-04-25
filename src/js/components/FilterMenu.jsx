// import React, { useState, useRef, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Collapse } from "react-bootstrap";
// import filter from "../../images/filter.svg";
// import Search from "./Search";

// function FilterMenu() {
//   const [open, setOpen] = useState(false);
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <nav>
//       <div className="ms-4" ref={wrapperRef}>
//         <Button
//           className="background-color-button navbar-toggler"
//           onClick={toggleMenu}
//           aria-controls="navbarNav"
//           aria-expanded={open}
//           aria-label="Toggle navigation"
//         >
//           <div className="text-center">
//             <img
//               className="navbar-icon"
//               src={filter}
//               alt="Logo"
//               style={{ width: "30px", height: "30px" }}
//             />
//           </div>
//           <a>Filter</a>
//         </Button>
//         <Collapse in={open}>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li>
//                 <Search />
//                 {/* <a href="#">Home</a> */}
//               </li>
//               <li>
//                 <p>Price High Low</p>
//               </li>
//               <li>
//                 <p>Calender?</p>
//               </li>
//             </ul>
//           </div>
//         </Collapse>
//       </div>
//     </nav>
//   );
// }

// export default FilterMenu;

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Collapse, Form, FormControl } from "react-bootstrap";
import filter from "../../images/filter.svg";
import HighLowButton from "./HighLowButton";

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

  const Search = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      handleSearch(searchTerm);
    };

    return (
      <Form onSubmit={handleSubmit} inline="true">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="background-color-button " type="submit">
          Search
        </Button>
      </Form>
    );
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
          <div className="filterButton">Filter</div>
        </Button>
        <Collapse in={open}>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <div>
                <Search />
              </div>

              <HighLowButton />

              <div>
                <p>Calender?</p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  );
}

export default FilterMenu;
