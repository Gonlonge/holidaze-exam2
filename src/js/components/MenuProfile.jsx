import { useState } from "react";
import HandleLogout from "../components/HandleLogout";
import { Link } from "react-router-dom";

function MenuProfile() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        className="background-color-button mt-5 mb-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "-" : "+"} More
      </button>
      {showMenu && (
        <div className="background-color pt-2">
          <div className="mt-2 ps-2">
            <Link to="/CreateVenue">Create New Venue</Link>
          </div>

          <div className="mt-2 ps-2">
            <Link to="/RegisterAsManager">Register As Manager</Link>
          </div>

          <div className="mt-2 ps-2">
            <Link to="/ContactUs">Contact Us</Link>
          </div>
          <div className="mt-5 pb-2 px-2">
            <HandleLogout />
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuProfile;
