import Nav from "../components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import LoadingIndicator from "../components/LoadingIndicator";

function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      className="form-range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
}

function CreateVenue() {
  const navigate = useNavigate();
  const [venue, setVenue] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    maxGuests: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
  });

  const [mediaUrl, setMediaUrl] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (venue.name.trim() === "") {
      errors.name = "Title is required";
    }

    if (venue.price <= 0) {
      errors.price = "Please enter a valid price";
    }

    if (venue.maxGuests <= 0) {
      errors.maxGuests = "Please enter a valid number of guests";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newVenue = {
        name: venue.name,
        description: venue.description,
        media: mediaUrl ? [mediaUrl] : [],
        price: parseInt(venue.price),
        maxGuests: parseInt(venue.maxGuests),
        rating: parseInt(venue.rating),
        meta: venue.meta,
        location: venue.location,
      };

      const token = localStorage.getItem("accessToken");
      console.log("Token:", token);
      fetch(`${API_BASE}${API_VENUE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newVenue),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((data) => {
          <LoadingIndicator />;
          console.log("Success:", data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    console.log("Name:", name);

    if (type === "checkbox") {
      setVenue((prevState) => ({
        ...prevState,
        meta: { ...prevState.meta, [name]: checked },
      }));
    } else if (type === "range") {
      setVenue((prevVenue) => ({
        ...prevVenue,
        rating: value,
      }));
    } else if (name.startsWith("location")) {
      const locationKey = name.split(".")[1];
      setVenue((prevState) => ({
        ...prevState,
        location: { ...prevState.location, [locationKey]: value },
      }));
    } else {
      setVenue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleMediaChange = (event) => {
    setMediaUrl(event.target.value);
  };

  return (
    <div className="container">
      <Nav />
      <form onSubmit={handleSubmit}>
        {/* Form inputs and validation */}
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            className={`form-control mt-1 ${
              formErrors.name ? "is-invalid" : ""
            }`}
            id="name"
            name="name"
            value={venue.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}
        </div>

        <div className="form-group mt-2">
          <label htmlFor="description  mt-1">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={venue.description}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <div className="form-group  mt-2">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className={`form-control mt-1 ${
              formErrors.price ? "is-invalid" : ""
            }`}
            id="price"
            name="price"
            value={venue.price}
            onChange={handleChange}
          />
          {formErrors.price && (
            <div className="invalid-feedback">{formErrors.price}</div>
          )}
        </div>

        <div className="form-group mt-2">
          <label htmlFor="maxGuests">Max Guests:</label>
          <input
            type="number"
            className={`form-control mt-1 ${
              formErrors.maxGuests ? "is-invalid" : ""
            }`}
            id="maxGuests"
            name="maxGuests"
            value={venue.maxGuests}
            onChange={handleChange}
          />
          {formErrors.maxGuests && (
            <div className="invalid-feedback">{formErrors.maxGuests}</div>
          )}
        </div>

        <div className="form-group mt-2">
          <label htmlFor="rating">Rating:</label>
          <Slider
            value={venue.rating}
            min={0}
            max={5}
            step={1}
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control mt-1"
            id="rating"
            name="rating"
            value={venue.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="wifi">Wi-Fi:</label>
          <input
            type="checkbox"
            className="form-check-input  mx-2"
            id="wifi"
            name="wifi"
            checked={venue.meta.wifi}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="parking">Parking:</label>
          <input
            type="checkbox"
            className="form-check-input mx-2"
            id="parking"
            name="parking"
            checked={venue.meta.parking}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="breakfast">Breakfast:</label>
          <input
            type="checkbox"
            className="form-check-input  mx-2"
            id="breakfast"
            name="breakfast"
            checked={venue.meta.breakfast}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="pets">Pets:</label>
          <input
            type="checkbox"
            className="form-check-input  mx-2"
            id="pets"
            name="pets"
            checked={venue.meta.pets}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="location.address">Address:</label>
          <input
            type="text"
            className="form-control  mt-1"
            id="location.address"
            name="location.address"
            value={venue.location.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="location.city">City:</label>
          <input
            type="text"
            className="form-control  mt-1"
            id="location.city"
            name="location.city"
            value={venue.location.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="location.zip">Zip:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="location.zip"
            name="location.zip"
            value={venue.location.zip}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="location.country">Country:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="location.country"
            name="location.country"
            value={venue.location.country}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="mediaUrl">Media URL:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="mediaUrl"
            name="mediaUrl"
            value={mediaUrl}
            onChange={handleMediaChange}
          />
        </div>
        <div className="mt-5 text-center mt-2">
          <button type="submit" className="btn btn-primary main-btn-color">
            Create Venue
          </button>
        </div>
      </form>
      <div className="footer-margin"></div>
    </div>
  );
}
export default CreateVenue;
