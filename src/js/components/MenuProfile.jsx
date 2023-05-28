// Register as manager and create a Venue

import HandleLogout from "../components/HandleLogout";
import { Link } from "react-router-dom";
import { updateVenueManagerStatus } from "../ApiCalls";

function MenuProfile({ isVenueManager }) {
  const registerAsManager = async () => {
    const result = await updateVenueManagerStatus();
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="background-color pt-2">
        {isVenueManager && (
          <div className="mt-2 ps-2">
            <p>
              <Link className="underline-button" to="/CreateVenue">
                Create New Venue
              </Link>
            </p>
          </div>
        )}

        {!isVenueManager && (
          <div className="mt-2 ps-2">
            <p>
              <Link className="underline-button" onClick={registerAsManager}>
                Register As Manager
              </Link>
            </p>
          </div>
        )}
        <div className="mt-2 pb-2 px-2">
          <HandleLogout />
        </div>
      </div>
    </div>
  );
}

export default MenuProfile;
