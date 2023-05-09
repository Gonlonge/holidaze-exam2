import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const name = localStorage.getItem("name");
        const url = `${API_BASE}${API_PROFILE}${name}/bookings`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            authorization: `bearer ${token}`,
          },
        });

        if (response.ok) {
          const bookings = await response.json();
          console.log("bookings", bookings);
          setBookings(bookings);
        } else {
          console.error("Error fetching bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings", error);
      }
    };

    getBookings();
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  //

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>
            {formatDate(booking.dateFrom)} - {formatDate(booking.dateTo)}:{" "}
            {booking.guests} guests
          </p>
          {/* <Button variant="danger" onClick={() => handleDelete(venue.id)}>
      Delete
    </Button> */}
        </div>
      ))}
    </div>
  );
};

export default Bookings;
