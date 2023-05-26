import { useState } from "react";
import HandleLogout from "../components/HandleLogout";
import { Link } from "react-router-dom";
import filter from "../../images/filter.svg";

function MenuProfile() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <button
        className="background-color-button mt-3 mb-2 underline-button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <h6>
          <img className="navbar-icon me-1 mb-1 " src={filter} alt="filter" />
          View More
        </h6>
      </button>
      {showMenu && (
        <div className="background-color pt-2">
          <div className="mt-2 ps-2">
            <p>
              <Link className="underline-button" to="/CreateVenue">
                Create New Venue
              </Link>
            </p>
          </div>

          <div className="mt-2 ps-2">
            {" "}
            <p>
              <Link className="underline-button" to="/RegisterAsManager">
                Register As Manager
              </Link>
            </p>
          </div>
          <div className="mt-2 pb-2 px-2">
            <HandleLogout />
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuProfile;
