import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import { Row, Col, Container } from "react-bootstrap";
import Nav from "../components/Nav";
import BookingCalender from "../components/BookingCalender";

function RentalDetail() {
  const [venueId, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          API_BASE + API_VENUE + `/${id}?_bookings=true&_owner=true`
        );

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
          <img
            className="img-fluid rounded"
            src={venueId.media}
            alt={venueId.media}
          />
        </Col>
        <Col xs={12} md={4}>
          <h1 className="mt-2">{venueId.name}</h1>
          <Row>
            <Col>
              <div className="mt-2">${venueId.price} Night</div>
            </Col>
            <Col>
              <div className="mt-2">Guests: {venueId.maxGuests}</div>
            </Col>
          </Row>{" "}
          <div className="separator mt-0"></div>
          <div>
            <div>{venueId.description}</div>
          </div>
          <div className="mt-2">Rating: {venueId.rating}</div>
          <div className="separator mt-0"></div>
          <div>
            <div>
              <small>breakfast: {venueId.meta.breakfast ? "Yes" : "No"}</small>
            </div>
            <div>
              <small>Parking: {venueId.meta.parking ? "Yes" : "No"}</small>
            </div>
            <div>
              <small>
                Pets: {venueId.meta.pets ? "Allowed" : "Not allowed"}
              </small>
            </div>
            <div>
              <small>
                Wifi: {venueId.meta.wifi ? "Free" : "Not available"}
              </small>
            </div>
          </div>
          <div className="separator mt-0"></div>
          <div>
            <div>
              <img
                src={venueId.owner.avatar}
                alt={`Avatar`}
                className="rounded-image"
              />
              <small>
                <div>{venueId.owner.email}</div>
              </small>
            </div>
          </div>
          <div className="separator mt-0"></div>
          <div>
            City: {venueId.location.city} {venueId.location.zip}
          </div>
          <div>
            Address: {venueId.location.address} {venueId.location.country}
          </div>
          <div className="mt-2 separator">
            {venueId.updated ? (
              <div className="mt-2">
                <div>Rating {venueId.rating}</div>
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
      <BookingCalender venueId={venueId.id} />
      <Nav />
      <div className="footer-margin"></div>
    </Container>
  );
}

export default RentalDetail;
