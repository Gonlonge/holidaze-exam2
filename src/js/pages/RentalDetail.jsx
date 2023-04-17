import { Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import Nav from "../components/Nav";

function RentalDetail() {
  const [venueId, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_BASE + API_VENUE + `/${id}`);
        const json = await response.json();
        console.log(json);
        setVenue(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <img className="img-fluid" src={venueId.media} alt={venueId.media} />
        </Col>
        <Col xs={12} md={4}>
          <h1 className="mt-2">{venueId.name}</h1>
          <Row>
            <Col>
              <p>Price: ${venueId.price} Night</p>
            </Col>
            <Col>
              <p>Guests: {venueId.maxGuests}</p>
            </Col>
            <div className="separator mt-0"></div>
          </Row>
          <div>
            <p>{venueId.description}</p>
          </div>
          <div className="separator mt-0"></div>
          <div>
            <p>
              <small>Parking: {venueId.meta.parking ? "Yes" : "No"}</small>
            </p>
            <p>
              <small>
                Pets: {venueId.meta.pets ? "Allowed" : "Not allowed"}
              </small>
            </p>
            <p>
              <small>
                Wifi: {venueId.meta.wifi ? "Free" : "Not available"}
              </small>
            </p>
          </div>
          <div className="separator mt-0"></div>
          <div>
            {venueId.updated ? (
              <div>
                <small>
                  Last updated: {new Date(venueId.updated).toLocaleString()}
                </small>
              </div>
            ) : (
              <div>Created: {new Date(venueId.created).toLocaleString()}</div>
            )}
          </div>
        </Col>
      </Row>
      <Nav />
      <div className="footer-margin"></div>
    </Container>
  );
}

export default RentalDetail;
