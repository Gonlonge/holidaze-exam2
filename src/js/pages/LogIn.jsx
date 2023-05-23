import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { API_BASE, API_LOGIN } from "../ApiEndpoints";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState(null);

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Please enter your email address.";
    }

    if (!password) {
      errors.password = "Please enter your password.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}${API_LOGIN}`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError("Invalid email or password.");
        return;
      }

      const json = await response.json(); // Parse response data as JSON
      console.log(json); // Log the JSON data
      setEmail("");
      setPassword("");
      setError(null);

      // Store the accessToken in localStorage
      localStorage.setItem("accessToken", json.accessToken);
      localStorage.setItem("name", json.name);

      console.log("Successful login!");
      // Redirect to profile page
      window.location.href = "/Profile";
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@stud.noroff.no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!validationErrors.email}
              aria-label="Email address"
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2 " controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!validationErrors.password}
              aria-label="Password"
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.password}
            </Form.Control.Feedback>
            <div className="mt-1">
              <Link
                to="/register"
                className="underline-button"
                aria-label="Register User"
              >
                Register User
              </Link>
            </div>
          </Form.Group>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" type="submit" aria-label="Login">
              Login
            </Button>
          </div>
        </Form>
      </div>
      <div className="footer-margin"></div>
    </Container>
  );
}

export default Login;
