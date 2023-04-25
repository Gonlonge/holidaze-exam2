// import { useState } from "react";
// import { API_BASE, API_MEDIA } from "../ApiEndpoints";

// function AvatarUploader({ name }) {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setSuccess(false);
//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch(
//         `${API_BASE}${API_MEDIA.replace(":name", name)}`,
//         {
//           method: "PUT",
//           body: formData,
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to upload avatar image");
//       }
//       setSuccess(true);
//     } catch (error) {
//       console.error(error);
//       setError(error.message);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <img
//         src={`${API_BASE}${API_MEDIA.replace(":name", name)}`}
//         alt="Avatar"
//       />
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />

//         <button type="submit" disabled={!file || uploading}>
//           {uploading ? "Uploading..." : "Upload"}
//         </button>
//         {error && <div>Error: {error}</div>}
//         {success && <div>Upload successful!</div>}
//       </form>
//     </div>
//   );
// }

// export default AvatarUploader;
