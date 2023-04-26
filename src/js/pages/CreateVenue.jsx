import Nav from "../components/Nav";
import { useState } from "react";
import { API_BASE, API_MY_VENUE } from "../ApiEndpoints";

function CreateVenue() {
  const [venue, setVenue] = useState({
    name: "",
    description: "",
    price: 0,
    maxGuests: 100,
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
      continent: "",
      lat: "",
      lng: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newVenue = {
      name: venue.name,
      description: venue.description,
      media: [], // replace with an array of media URLs if necessary
      price: parseInt(venue.price),
      maxGuests: venue.maxGuests, // Add maxGuests to the newVenue object
      rating: 0, // replace with a default rating if necessary
      meta: venue.meta,
      location: venue.location,
    };
    const token = localStorage.getItem("accessToken");
    console.log(token);
    fetch(`${API_BASE}${API_MY_VENUE}`, {
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
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      setVenue((prevState) => ({
        ...prevState,
        meta: { ...prevState.meta, [name]: checked },
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

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={venue.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={venue.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={venue.price}
          onChange={handleChange}
        />

        <label htmlFor="wifi">Wi-Fi:</label>
        <input
          type="checkbox"
          id="wifi"
          name="wifi"
          checked={venue.meta.wifi}
          onChange={handleChange}
        />

        <label htmlFor="parking">Parking:</label>
        <input
          type="checkbox"
          id="parking"
          name="parking"
          checked={venue.meta.parking}
          onChange={handleChange}
        />

        <label htmlFor="breakfast">Breakfast:</label>
        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          checked={venue.meta.breakfast}
          onChange={handleChange}
        />

        <label htmlFor="pets">Pets:</label>
        <input
          type="checkbox"
          id="pets"
          name="pets"
          checked={venue.meta.pets}
          onChange={handleChange}
        />

        <label htmlFor="location.address">Address:</label>
        <input
          type="text"
          id="location.address"
          name="location.address"
          value={venue.location.address}
          onChange={handleChange}
        />

        <label htmlFor="location.city">City:</label>
        <input
          type="text"
          id="location.city"
          name="location.city"
          value={venue.location.city}
          onChange={handleChange}
        />

        <label htmlFor="location.zip">Zip:</label>
        <input
          type="text"
          id="location.zip"
          name="location.zip"
          value={venue.location.zip}
          onChange={handleChange}
        />

        <label htmlFor="location.country">Country:</label>
        <input
          type="text"
          id="location.country"
          name="location.country"
          value={venue.location.country}
          onChange={handleChange}
        />

        <label htmlFor="location.continent">Continent:</label>
        <input
          type="text"
          id="location.continent"
          name="location.continent"
          value={venue.location.continent}
          onChange={handleChange}
        />

        <label htmlFor="location.lat">Latitude:</label>
        <input
          type="text"
          id="location.lat"
          name="location.lat"
          value={venue.location.lat}
          onChange={handleChange}
        />

        <label htmlFor="location.lng">Longitude:</label>
        <input
          type="text"
          id="location.lng"
          name="location.lng"
          value={venue.location.lng}
          onChange={handleChange}
        />

        <button type="submit">Create Venue</button>
      </form>
    </div>
  );
}
export default CreateVenue;
