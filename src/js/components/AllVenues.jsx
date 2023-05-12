import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import { Col, Row, Image } from "react-bootstrap";
import star from "../../images/star.png";
import SearchInput from "../components/search"; // Import SearchInput component
import LoadingIndicator from "./LoadingIndicator";

function AllVenues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProductNames, setFilteredProductNames] = useState([]);

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
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);

    const filteredNames = venues
      .map((venue) => venue.name)
      .filter((name) =>
        name.toLowerCase().includes(event.target.value.toLowerCase())
      );

    setFilteredProductNames(filteredNames);
  };

  return (
    <div>
      <SearchInput
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      <div>
        {filteredProductNames.map((name, index) => (
          <div key={`${name}-${index}`}>{name}</div>
        ))}
      </div>
      <Row>
        {filteredVenues.map((venue) => (
          <Col md={4} sm={6} key={venue.id}>
            <Link to={`RentalDetail/${venue.id}`}>
              {venue.media.length > 0 ? (
                <div className="ratio ratio-4x3">
                  <Image
                    className="img-fluid rounded"
                    src={venue.media[0]}
                    alt={venue.name}
                  />
                </div>
              ) : null}
              <div className="mt-2 mb-5">
                <Row>
                  <Col>
                    <div className="d-flex justify-content-between">
                      <h5>{venue.name}</h5>

                      <h5>
                        <img className="pb-2" src={star} alt="star" />{" "}
                        {venue.rating}
                      </h5>
                    </div>
                  </Col>
                </Row>
                <p className="mb-0">{venue.location.city}</p>
                <p className="mb-0">Guests: {venue.maxGuests}</p>
                <p className="mb-0">Night: ${venue.price}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllVenues;
