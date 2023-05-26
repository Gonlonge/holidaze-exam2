// import React, { useEffect, useState } from "react";
// import { API_BASE, API_VENUE } from "../ApiEndpoints";
// import LoadingIndicator from "./LoadingIndicator";
// import ErrorIndicator from "../components/LoadingIndicator";

// function GetAllVenues() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const response = await fetch(API_BASE + API_VENUE);
//         console.log(response);
//         const json = await response.json();
//         console.log(json);
//         setVenues(json);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//       }
//     }

//     getData();
//   }, []);

//   if (isLoading) {
//     return <LoadingIndicator />;
//   }

//   if (isError) {
//     return <ErrorIndicator />;
//   }
// }

// export default GetAllVenues;
