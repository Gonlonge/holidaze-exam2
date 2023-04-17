// Get venue

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";

function GetApi() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(API_BASE + API_VENUE);
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
          <Link to={`RentalDetail/${venue.id}`}>
            {venue.media.length > 0 ? (
              <img
                className="responsive-img"
                src={venue.media[0]}
                alt={venue.name}
              />
            ) : null}
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
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GetApi;
