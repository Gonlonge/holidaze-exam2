// import React, { useState } from "react";
// import { API_BASE, API_REGISTER } from "../ApiEndpoints";
// import { getHeader } from "../Api"; // Import getHeader() function from the 'api' module

// const UpdateImage = () => {
//   const [url, setUrl] = useState("");
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateProfileImage = async (url, name) => {
//     try {
//       const data = JSON.stringify({
//         avatar: url,
//       });
//       if (!data) {
//         return;
//       }

//       const request = {
//         method: "PUT",
//         headers: getHeader(),
//         body: data,
//       };
//       const requestUrl = `${API_BASE}${API_REGISTER}${name}/media`;
//       const apiResponse = await fetch(requestUrl, request);
//       const json = await apiResponse.json();
//       return json;
//     } catch (error) {}
//   };

//   const handleUpdateProfileImage = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await updateProfileImage(url, name);
//       console.log("Profile image updated:", response);
//     } catch (error) {
//       console.error("Error updating profile image:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Profile Image</h2>
//       <form onSubmit={handleUpdateProfileImage}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Image URL:
//           <input
//             type="text"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit" disabled={loading}>
//           Update Profile Image
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateImage;

// import React, { useEffect, useState } from "react";
// import { API_BASE, API_PROFILE } from "../ApiEndpoints";
// import { getAuthToken } from "../getAuthToken";

// function UpdateImage() {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     fetch(API_BASE + API_PROFILE, {
//       headers: {
//         Authorization: `Bearer ${getAuthToken()}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setProfiles(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {profiles.map((profile) => (
//         <div key={profile.id}>
//           <h2>{profile.name}</h2>
//           <p>{profile.bio}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UpdateImage;
