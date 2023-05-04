// // import { API_BASE, API_PROFILE } from "../ApiEndpoints";
// // import { useState } from "react";

// // function AvatarModal({ handleImageUpload, userAvatar }) {
// //   const [formData, setFormData] = useState({
// //     avatar: "",
// //   });
// //   const [avatar, setAvatar] = useState(userAvatar);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const name = localStorage.getItem("name");
// //     const newAvatar = {
// //       media: formData.avatar,
// //     };

// //     try {
// //       const token = localStorage.getItem("accessToken");
// //       const name = localStorage.getItem("name");
// //       const response = await fetch(`${API_BASE}${API_PROFILE}${name}/media`, {
// //         method: "PUT",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(newAvatar),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to update avatar.");
// //       }

// //       const data = await response.json();
// //       console.log("Avatar updated successfully!");
// //       setAvatar(formData.avatar);
// //       handleImageUpload(formData.avatar);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleChange = (event) => {
// //     setFormData({ ...formData, [event.target.name]: event.target.value });
// //   };

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="avatar">Avatar URL:</label>
// //         <input
// //           type="text"
// //           name="avatar"
// //           value={formData.avatar}
// //           onChange={handleChange}
// //         />
// //         <button type="submit">Update Avatar</button>
// //       </form>
// //       {avatar && <img src={avatar} alt="Avatar" />}
// //     </>
// //   );
// // }

// // export default AvatarModal;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API_BASE, API_REGISTER } from "../ApiEndpoints";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// function Register() {
//   console.log("Register her ?");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [formData, setFormData] = useState({
//     avatar: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     console.log(formData);
//     event.preventDefault();
//     try {
//       setIsError(false);
//       setIsLoading(true);
//       const response = await fetch(API_BASE + API_REGISTER, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const json = await response.json();
//       console.log(json); // Log the response data
//       setIsLoading(false);
//       if (response.ok) {
//         localStorage.setItem("token", json.token);
//         localStorage.setItem("name", json.name);
//         navigate("/LogIn"); // Redirect to the Profile page
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setIsError(true);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: newValue,
//     }));
//   };

//   if (isLoading) {
//     return <div>Loading data</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <Container>
//       <Form.Group controlId="formBasicAvatar">
//         <Form.Label>Avatar</Form.Label>
//         <Form.Control
//           className="form-control"
//           type="text"
//           placeholder="Enter avatar URL"
//           name="avatar"
//           value={formData.avatar}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <div className="d-flex justify-content-center mt-4">
//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </div>
//       {isError && <Alert variant="danger">Error loading data</Alert>}

//       <div className="footer-margin"></div>
//     </Container>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import { Container, Form, Button, Alert } from "react-bootstrap";

function AvatarModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    avatar: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsError(false);
      setIsLoading(true);

      const name = localStorage.getItem("name");
      const newAvatar = {
        avatar: formData.avatar,
      };
      const token = localStorage.getItem("accessToken");
      const response = await fetch(`${API_BASE}${API_PROFILE}/${name}/media`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAvatar),
      });
      if (!response.ok) {
        throw new Error("Failed to update avatar.");
      }
      setIsLoading(false);
      navigate("/Profile"); // Redirect to the Profile page
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  if (isLoading) {
    return <div>Loading data</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Container>
      <Form.Group controlId="formBasicAvatar">
        <Form.Label>Avatar</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          placeholder="Enter avatar URL"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update Avatar
        </Button>
      </div>
      {isError && <Alert variant="danger">Error loading data</Alert>}

      <div className="footer-margin"></div>
    </Container>
  );
}
export default AvatarModal;
