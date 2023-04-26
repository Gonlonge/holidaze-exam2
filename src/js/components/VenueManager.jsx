// import { useState } from "react";
// import { Container, Form, Button, Alert } from "react-bootstrap";
// import { API_BASE, API_REGISTER_VENUE_MANAGER } from "../ApiEndpoints";

// function RegisterVenueManager() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form fields
//     if (!name || !email || !password) {
//       setError("Please fill out all fields.");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_BASE}${API_REGISTER_VENUE_MANAGER}`, {
//         method: "POST",
//         body: JSON.stringify({ name, email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         setError("An error occurred. Please try again later.");
//         return;
//       }

//       const json = await response.json(); // Parse response data as JSON
//       console.log(json); // Log the JSON data
//       setName("");
//       setEmail("");
//       setPassword("");
//       setError(null);

//       console.log("Successful registration!");
//       // Redirect to login page
//       window.location.href = "/login";
//     } catch (error) {
//       setError("An error occurred. Please try again later.");
//       console.error(error);
//     }
//   };

//   return (
//     <Container>
//       <div className="justify-content-center mt-5">
//         <Form onSubmit={handleSubmit}>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form.Group controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               aria-label="Name"
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               aria-label="Email address"
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               aria-label="Password"
//             />
//           </Form.Group>
//           <div className="d-flex justify-content-center mt-2">
//             <Button variant="primary" type="submit" aria-label="Register">
//               Register
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Container>
//   );
// }

// export default RegisterVenueManager;
