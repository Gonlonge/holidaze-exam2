// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function DateCalendar({ onBook }) {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const handleBook = () => {
//     onBook(startDate, endDate);
//   };

//   return (
//     <div>
//       <h2>Select Dates</h2>
//       <div className="form-group">
//         <label>From: </label>
//         <div>
//           <DatePicker
//             className="form-control"
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             selectsStart
//             startDate={startDate}
//             endDate={endDate}
//             dateFormat="yyyy-MM-dd"
//           />
//         </div>
//       </div>
//       <div className="form-group">
//         <label>To: </label>
//         <div>
//           <DatePicker
//             className="form-control"
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             selectsEnd
//             startDate={startDate}
//             endDate={endDate}
//             minDate={startDate}
//             dateFormat="yyyy-MM-dd"
//           />
//         </div>
//       </div>
//       <button className="btn btn-primary" onClick={handleBook}>
//         Book
//       </button>
//     </div>
//   );
// }

// export default DateCalendar;
