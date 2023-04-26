import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyCalendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="mt-2">
      <p className="mt-2 separator">Date</p>
      <small>
        <label htmlFor="startDate">From: </label>
      </small>

      <DatePicker
        id="startDate"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br />
      <small>
        <label htmlFor="endDate">To:</label>
      </small>
      <DatePicker
        id="endDate"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}

export default MyCalendar;
