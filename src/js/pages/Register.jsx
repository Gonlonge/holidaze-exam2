// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API_BASE, API_REGISTER } from "../ApiEndpoints";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// function Register() {
//   console.log("Register her ?");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     venueManager: false,
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
//       <div className="justify-content-center mt-5">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your name"
//               value={formData.name}
//               name="name"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail" className="mt-2">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="name@stud.noroff.no"
//               value={formData.email}
//               name="email"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword" className="mt-2">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               name="password"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicConfirmPassword" className="mt-2">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               name="confirmPassword"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicCheckbox">
//             <Form.Check
//               className="mt-2"
//               type="checkbox"
//               label="Register as a Venue Manager"
//               checked={formData.venueManager}
//               name="venueManager"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <div className="d-flex justify-content-center mt-4">
//             <Button variant="primary" type="submit">
//               Register
//             </Button>
//           </div>
//           {isError && <Alert variant="danger">Error loading data</Alert>}
//         </Form>
//       </div>
//       <div className="footer-margin"></div>
//     </Container>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE, API_REGISTER } from "../ApiEndpoints";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Register() {
  console.log("Register her ?");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    venueManager: false,
    avatar: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetch(API_BASE + API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      console.log(json); // Log the response data
      setIsLoading(false);
      if (response.ok) {
        localStorage.setItem("token", json.token);
        localStorage.setItem("name", json.name);
        navigate("/LogIn"); // Redirect to the Profile page
      }
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
      <div className="justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@stud.noroff.no"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword" className="mt-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </Form.Group>

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

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              className="mt-2"
              type="checkbox"
              label="Register as a Venue Manager"
              checked={formData.venueManager}
              name="venueManager"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
          {isError && <Alert variant="danger">Error loading data</Alert>}
        </Form>
      </div>
      <div className="footer-margin"></div>
    </Container>
  );
}

export default Register;
