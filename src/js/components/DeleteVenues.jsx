// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import DeleteVenues from "../components/DeleteVenues";
// import { API_BASE, API_PROFILE } from "../ApiEndpoints";

// function MyVenues() {
//   const [venues, setVenues] = useState([]);

//   useEffect(() => {
//     const getVenues = async () => {
//       const token = localStorage.getItem("accessToken");
//       const name = localStorage.getItem("name");
//       const url = API_BASE + API_PROFILE + name + "/venues";
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const venues = await response.json();
//         console.log("Venues:", venues);
//         setVenues(venues);
//       } else {
//         console.error("Error fetching venues", response.statusText);
//       }
//     };

//     getVenues();
//   }, []);

//   async function handleDelete(id) {
//     try {
//       await DeleteVenues(id);
//       // Update the venues state to remove the deleted venue
//       setVenues(venues.filter((venue) => venue.id !== id));
//     } catch (error) {
//       console.error("Error deleting venue", error);
//     }
//   }

//   return (
//     <div>
//       {venues.map((venue) => (
//         <div key={venue.id} className="mb-3 d-flex align-items-center">
//           <img className="rounded MyBookings me-3" src={venue.media} alt="" />
//           <div>
//             <h5>{venue.name}</h5>
//             <p>{venue.location.city}</p>
//             <p>${venue.price}</p>
//             <Button variant="danger" onClick={() => handleDelete(venue.id)}>
//               Delete
//             </Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyVenues;
