// Bookings at profile page

import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const name = localStorage.getItem("name");
        const url = `${API_BASE}${API_PROFILE}${name}/bookings?_venue=true`;
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

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id} className="mb-3 d-flex align-items-center">
          <img
            className="rounded MyBookings me-3"
            src={booking.venue.media}
            alt=""
          />
          <div>
            <h5>{booking.venue.name}</h5>
            <p>{booking.venue.location.city}</p>
            <p>${booking.venue.price}</p>
            <p>
              {formatDate(booking.dateFrom)} - {formatDate(booking.dateTo)}:{" "}
              {booking.guests} guests
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
