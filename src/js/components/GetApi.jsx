import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import { Col, Row, Image } from "react-bootstrap";

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
    <Row>
      {venues.map((venue) => (
        <Col md={4} sm={6} key={venue.id}>
          <Link to={`RentalDetail/${venue.id}`}>
            {venue.media.length > 0 ? (
              <div className="ratio ratio-4x3">
                <Image
                  className="img-fluid"
                  src={venue.media[0]}
                  alt={venue.name}
                />
              </div>
            ) : null}
            <div className="mt-2 mb-5">
              <h5>{venue.name}</h5>
              <div>Max Guests: {venue.maxGuests}</div>
              <div>Price: {venue.price}</div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default GetApi;
