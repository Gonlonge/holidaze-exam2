// Get venue

import React, { useEffect, useState } from "react";

const API_BASE = "https://api.noroff.dev/api/v1/holidaze/venues";

function GetApi() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(API_BASE);
        console.log(response);
        const json = await response.json();
        console.log(json);
        setVenues(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading data</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {venues.map((venue) => (
        <div key={venue.id}>
          {venue.media.map((image) => (
            <img
              className="responsive-img"
              src={image}
              alt={venue.name}
              key={image}
            />
          ))}

          <div className="row mt-2">
            <div className="col">
              <div>{venue.name}</div>
            </div>
            <div className="col">
              <p>Max Guests: {venue.maxGuests}</p>
            </div>
          </div>
          <div className="mb-5">
            <p>Price: {venue.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetApi;

// import React, { useState, useEffect } from "react";

// const API_BASE = "https://api.noroff.dev/api/v1/holidaze/venues";

// function GetApi() {
//   const [venues, setVenues] = useState([]);

//   useEffect(() => {
//     fetch(API_BASE)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // log the data to the console
//         setVenues(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {venues.map((venue) => (
//         <div key={venue.id}>
//           {venue.media.map((image) => (
//             <img src={image} key={image} />
//           ))}
//           <p>Max Guests: {venue.maxGuests}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetApi;
