import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import { API_BASE, API_PROFILE, API_VENUE } from "../ApiEndpoints";

function MyVenues() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async () => {
      console.log("Fetching venues...");
      const token = localStorage.getItem("accessToken");
      const name = localStorage.getItem("name");
      const url = API_BASE + API_PROFILE + name + "/venues";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Venues fetched successfully!");
        const venues = await response.json();
        console.log("Venues:", venues);
        setVenues(venues);
      } else {
        console.error("Error fetching venues", response.statusText);
      }
    };

    getVenues();
  }, []);

  async function handleDelete(id) {
    console.log(`Deleting venue with ID ${id}...`);
    try {
      const token = localStorage.getItem("accessToken");
      const url = API_BASE + API_VENUE + "/" + id;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log(`Venue with ID ${id} deleted successfully!`);
        const responseBody = await response.text();
        const deletedVenue = responseBody ? JSON.parse(responseBody) : null;
        console.log("Deleted venue:", deletedVenue);
        // Update the venues state to remove the deleted venue
        setVenues(venues.filter((venue) => venue.id !== id));
      } else {
        console.error("Error deleting venue", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting venue", error);
    }
  }

  console.log("Rendering MyVenues component...");
  return (
    <div>
      {venues.map((venue) => (
        <div key={venue.id} className="mb-3 d-flex align-items-center">
          <img
            className="rounded MyBookings me-3"
            src={venue.media}
            alt={venue.media}
          />
          <div>
            <h5>{venue.name}</h5>
            <p>{venue.location.city}</p>
            <p>${venue.price}</p>
            <Button variant="danger" onClick={() => handleDelete(venue.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyVenues;
