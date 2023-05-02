import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCalender = ({
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  onBooking,
}) => {
  const handleDateFromChange = (date) => {
    setDateFrom(date);
    console.log("Selected dateFrom:", date);
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    console.log("Selected dateTo:", date);
  };

  return (
    <>
      <label>Date From:</label>
      <DatePicker
        selected={dateFrom}
        onChange={handleDateFromChange}
        dateFormat="yyyy-MM-dd"
      />

      <label>Date To:</label>
      <DatePicker
        selected={dateTo}
        onChange={handleDateToChange}
        dateFormat="yyyy-MM-dd"
      />

      {/* Add the booking button */}
      <button onClick={onBooking}>Book Now</button>
    </>
  );
};

export default BookingCalender;
