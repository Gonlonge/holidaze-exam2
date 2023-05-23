import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE, API_VENUE } from "../ApiEndpoints";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

function EditVenue() {
  const { id } = useParams();
  // const [media, setMedia] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [venue, setVenue] = useState({
    name: "",
    description: "",
    price: 0,
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
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorIndicator />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("accessToken");
    console.log("Token:", token);

    // TODO: Implement loading indicator
    const updatedVenue = {
      name: venue.name,
      description: venue.description,
      price: parseInt(venue.price),
      maxGuests: parseInt(venue.maxGuests), // Make sure maxGuests is a number
      rating: 0,
      meta: venue.meta,
      location: venue.location,
      // media: "media",
    };

    const updateVenue = async () => {
      try {
        console.log(JSON.stringify(venue));
        const response = await fetch(API_BASE + API_VENUE + `/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedVenue),
        });
        const json = await response.json();
        console.log(json);
        // Redirect to profile page
        window.location.href = "/Profile";
      } catch (error) {
        console.log(error);
      }
    };
    updateVenue();
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
    } else if (name === "media") {
      setMedia(value); // Update media state separately
    } else {
      setVenue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container">
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="name"
            name="name"
            value={venue.name}
            onChange={handleChange}
          />
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
            className="form-control  mt-1"
            id="price"
            name="price"
            value={venue.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="maxGuests">Max Guests:</label>
          <input
            type="number"
            className="form-control mt-1"
            id="maxGuests"
            name="maxGuests"
            value={venue.maxGuests}
            onChange={handleChange}
          />
        </div>
        <div className="form-group  mt-2">
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
        {/* 
        <div className="form-group mt-2">
          <label htmlFor="media">Media URL:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="media"
            name="media"
            value={media}
            onChange={handleChange}
          />
        </div> */}
        <div className="mt-5 text-center mt-2">
          <button type="submit" className="btn btn-primary main-btn-color">
            Update Venue
          </button>
        </div>
      </form>
      <div className="footer-margin"></div>
    </div>
  );
}
export default EditVenue;
