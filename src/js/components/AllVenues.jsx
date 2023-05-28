import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import { Col, Row, Image } from "react-bootstrap";
import star from "../../images/star.png";
import SearchInput from "../components/search";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "../components/LoadingIndicator";

function AllVenues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProductNames] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const [hasMore, setHasMore] = useState(true);
  const [sortOption, setSortOption] = useState("");

  const handleLoadMore = async (sortOptionValue) => {
    try {
      setIsLoading(false);
      let url = `${API_BASE}${API_VENUE}?offset=${offset}&limit=${limit}`;

      console.log("sortOption: " + sortOptionValue);
      if (sortOptionValue && sortOptionValue.length > 0) {
        if (sortOptionValue === "priceHighToLow") {
          url = `${url}&sort=price&sortOrder=desc`;
        } else if (sortOptionValue === "priceLowToHigh") {
          url = `${url}&sort=price&sortOrder=asc`;
        } else if (sortOptionValue === "rating") {
          url = `${url}&sort=rating&sortOrder=desc`;
        } else if (sortOptionValue === "maxGuests") {
          url = `${url}&sort=maxGuests&sortOrder=desc`;
        } else if (sortOptionValue === "name") {
          url = `${url}&sort=name&sortOrder=asc`;
        } else {
          url = `${url}&sort=created&sortOrder=desc`;
        }
      } else {
        url = `${url}&sort=created&sortOrder=desc`;
      }

      const response = await fetch(url);
      const json = await response.json();
      if (!Array.isArray(json) || json.length === 0) {
        setHasMore(false);
        return;
      }
      setVenues((prevVenues) => [...prevVenues, ...json]);
      setOffset((prevOffset) => prevOffset + limit);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoadMore();
  }, []);

  const handleSortChange = (event) => {
    console.log("handleSortChange");
    // Clear venues and offset
    setVenues([]);
    setOffset(0);
    // Set sort option
    setSortOption(event.target.value);
    handleLoadMore(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div>
        <SearchInput
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
        />
      </div>
      <div className="select-wrapper">
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">Latest</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="maxGuests">Max Guests</option>
        </select>
      </div>
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
                        <img className="pb-2 pe-1" src={star} alt="star" />
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
      {hasMore && (
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary main-btn-color"
            onClick={handleLoadMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllVenues;
