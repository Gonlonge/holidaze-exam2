import React, { useState, useEffect } from "react";
import { API_BASE, API_BOOKINGS } from "../ApiEndpoints";

function BookingCalender({ venueId }) {
  const [formData, setFormData] = useState({
    dateFrom: "",
    dateTo: "",
    guests: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          API_BASE + API_BOOKINGS + `?venueId=${venueId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const bookedData = await response.json();
          setBookedDates(bookedData);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBookedDates();
  }, [venueId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "guests" ? parseInt(value, 10) : value,
    }));
  };

  const isDateBooked = (date) => {
    return bookedDates.some((booking) => {
      const startDate = new Date(booking.dateFrom);
      const endDate = new Date(booking.dateTo);
      return date >= startDate && date <= endDate;
    });
  };

  const disabledDates = (date) => {
    return isDateBooked(date) ? { disabled: true } : {};
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setSuccessMessage("");

    const bookingData = {
      ...formData,
      venueId: venueId,
    };

    console.log("Booking data:", bookingData);

    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(API_BASE + API_BOOKINGS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setSuccessMessage("Booking successful!");
        setFormData({
          dateFrom: "",
          dateTo: "",
          guests: 1,
        });
      } else {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label htmlFor="dateFrom">Check In:</label>
        <input
          type="date"
          className="form-control"
          id="dateFrom"
          name="dateFrom"
          value={formData.dateFrom}
          onChange={handleInputChange}
          required
          {...disabledDates(new Date(formData.dateFrom))}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="dateTo">Check Out:</label>
        <input
          type="date"
          className="form-control"
          id="dateTo"
          name="dateTo"
          value={formData.dateTo}
          onChange={handleInputChange}
          required
          {...disabledDates(new Date(formData.dateTo))}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          className="form-control"
          id="guests"
          name="guests"
          value={Number.isInteger(formData.guests) ? formData.guests : ""}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary main-btn-color mt-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Book Now"}
      </button>
      {isError && (
        <div className="alert alert-danger mt-3" role="alert">
          There was an error submitting your booking. Please try again later.
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
    </form>
  );
}

export default BookingCalender;
