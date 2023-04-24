// import { API_BASE, API_VENUE } from "../ApiEndpoints";
// import React, { useState } from "react";

// function NewVenues() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     media: [],
//     price: 0,
//     maxGuests: 0,
//     meta: {
//       wifi: false,
//       parking: false,
//       breakfast: false,
//       pets: false,
//     },
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(API_BASE + API_VENUE, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Venue created successfully");
//         } else {
//           response.json().then((errorData) => {
//             console.error("Failed to create venue:", errorData);
//           });
//         }
//       })

//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     const parsedValue = ["price", "maxGuests"].includes(name)
//       ? parseInt(value)
//       : value;

//     if (name === "media") {
//       const mediaArray = value.split(",").map((url) => url.trim());
//       setFormData((prevState) => ({
//         ...prevState,
//         media: mediaArray,
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: parsedValue,
//       }));
//     }
//   };

//   const handleMetaChange = (event) => {
//     const { name, checked } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       meta: {
//         ...prevState.meta,
//         [name]: checked,
//       },
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         required
//       />

//       <label htmlFor="description">Description</label>
//       <textarea
//         name="description"
//         value={formData.description}
//         onChange={handleInputChange}
//         required
//       />

//       <label htmlFor="media">Media (comma-separated URLs)</label>
//       <input
//         type="text"
//         name="media"
//         value={formData.media}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="price">Price</label>
//       <input
//         type="number"
//         name="price"
//         value={formData.price}
//         onChange={handleInputChange}
//         required
//       />

//       <label htmlFor="maxGuests">Max Guests</label>
//       <input
//         type="number"
//         name="maxGuests"
//         value={formData.maxGuests}
//         onChange={handleInputChange}
//         required
//       />

//       <label htmlFor="wifi">Wi-Fi</label>
//       <input
//         type="checkbox"
//         name="wifi"
//         checked={formData.meta.wifi}
//         onChange={handleMetaChange}
//       />

//       <label htmlFor="parking">Parking</label>
//       <input
//         type="checkbox"
//         name="parking"
//         checked={formData.meta.parking}
//         onChange={handleMetaChange}
//       />

//       <label htmlFor="breakfast">Breakfast</label>
//       <input
//         type="checkbox"
//         name="breakfast"
//         checked={formData.meta.breakfast}
//         onChange={handleMetaChange}
//       />

//       <label htmlFor="pets">Pets</label>
//       <input
//         type="checkbox"
//         name="pets"
//         checked={formData.meta.pets}
//         onChange={handleMetaChange}
//       />
//       <button type="submit">Create Venue</button>
//     </form>
//   );
// }

// export default NewVenues;
