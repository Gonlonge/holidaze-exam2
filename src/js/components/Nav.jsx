// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import user from "../../images/person.svg";
// import home from "../../images/home.svg";
// import destination from "../../images/holiday-village.svg";

// function Nav() {
//   const isLoggedIn = localStorage.getItem("accessToken");

//   return (
//     <div>
//       <nav className="nav-container separator">
//         <div className="desktop-logo">
//           <Header />
//         </div>
//         <ul className="nav-list">
//           <li>
//             <Link to="/">
//               <p className="none-margin-center">
//                 <img className="navbar-icon" src={home} alt="home" />
//               </p>
//               Home
//             </Link>
//           </li>

//           <li className="ms-5">
//             <Link to="/Destination">
//               <p className="none-margin-center">
//                 <img
//                   className="navbar-icon"
//                   src={destination}
//                   alt="destination"
//                 />
//               </p>
//               Destination
//             </Link>
//           </li>
//           <li className="ms-5">
//             {isLoggedIn ? (
//               <Link to="/Profile">
//                 <p className="none-margin-center">
//                   <img className="navbar-icon" src={user} alt="user" />
//                 </p>
//                 Profile
//               </Link>
//             ) : (
//               <Link to="/Login">
//                 <p className="none-margin-center">
//                   <img className="navbar-icon" src={user} alt="user" />
//                 </p>
//                 Log In
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Nav;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import user from "../../images/person.svg";
import home from "../../images/home.svg";
import destination from "../../images/holiday-village.svg";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavBarVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isLoggedIn = localStorage.getItem("accessToken");

  return (
    <div>
      <nav
        className={`nav-container separator ${isNavBarVisible ? "" : "hidden"}`}
      >
        <div className="desktop-logo">
          <Header />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <p className="none-margin-center">
                <img className="navbar-icon" src={home} alt="home" />
              </p>
              Home
            </Link>
          </li>

          <li className="ms-5">
            <Link to="/Destination">
              <p className="none-margin-center">
                <img
                  className="navbar-icon"
                  src={destination}
                  alt="destination"
                />
              </p>
              Destinations
            </Link>
          </li>
          <li className="ms-5">
            {isLoggedIn ? (
              <Link to="/Profile">
                <p className="none-margin-center">
                  <img className="navbar-icon" src={user} alt="user" />
                </p>
                Profile
              </Link>
            ) : (
              <Link to="/Login">
                <p className="none-margin-center">
                  <img className="navbar-icon" src={user} alt="user" />
                </p>
                Log In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
