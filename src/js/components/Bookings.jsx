// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { API_BASE, API_BOOKINGS } from "../ApiEndpoints";

// function Bookings() {
//   const { id } = useParams();

//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const endpoint = API_BOOKINGS.replace("{name}", id); // Replace {name} with id
//         const response = await fetch(API_BASE + endpoint);
//         const json = await response.json();

//         setIsLoading(false);
//         console.log("Venue data loaded:", json);
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//         console.error("Error loading venue data:", error);
//       }
//     }

//     getData();
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading venue details...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return <div>bookings</div>;
// }

// export default Bookings;
