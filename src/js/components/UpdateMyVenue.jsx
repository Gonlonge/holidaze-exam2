// import React, { useState, useEffect } from "react";
// import { API_BASE, API_VENUE } from "../ApiEndpoints";

// function UpdateMyVenue() {
//   const [formData, setFormData] = useState({
//     description: "",
//   });

//   useEffect(() => {
//     const updateVenue = async () => {
//       const id = localStorage.getItem("id");
//       const UpdateVenue = {
//         venue: formData.venue,
//       };

//       const token = localStorage.getItem("accessToken");
//       const response = await fetch(`${API_BASE}${API_VENUE}/${id}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(UpdateVenue),
//       });

//       // Process the response or handle errors
//     };

//     updateVenue();
//   }, [formData]);

//   return null; // or your JSX component
// }

// export default UpdateMyVenue;
