// import CallApi from "./ApiCall";
// import { API_BASE, API_VENUE } from "./ApiEndpoints.jsx";

// async function FetchAllVenues() {
//   let offSet = 0;
//   const results = [];
//   for (let i = 0; i < 15; i++) {
//     const result = await CallApi(
//       API_BASE,
//       API_VENUE + `?offset=${offSet}&limit=100`,
//       "GET",
//       null
//     );
//     result.forEach((venue) => {
//       results.push(venue);
//     });
//     offSet += 100;
//     if (result.length > 99) {
//       continue;
//     }
//     break;
//   }
//   return results;
// }

// export default FetchAllVenues;
