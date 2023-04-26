import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import { Col, Row, Image } from "react-bootstrap";

export const SearchInput = ({ searchInput, handleSearchInputChange }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search"
      />
      <button className="btn btn-outline-secondary" type="button">
        Search
      </button>
    </div>
  );
};

function GetApi() {
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
    return <div>Loading data</div>;
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
    <>
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
    </>
  );
}

export default GetApi;
