// import Nav from "../components/Nav";

// // import UpdateMyVenue from "../components/UpdateMyVenue";

// function Destination() {
//   return (
//     <div>
//       <Nav />
//       <div>destinatio</div>
//     </div>
//   );
// }

// export default Destination;import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

function Destination() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(API_BASE + API_VENUE);
        const json = await response.json();
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
    return <LoadingIndicator />;
  }
  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Nav />
      {isError ? (
        <div>Error occurred.</div>
      ) : (
        <div>
          {venues.map((venue) => (
            <div key={venue.id}>{venue.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Destination;
