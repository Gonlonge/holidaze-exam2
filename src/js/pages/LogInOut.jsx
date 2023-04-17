import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { API_BASE, API_LOGIN } from "../ApiEndpoints";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !password) {
      setError("Please fill out both email and password.");
      return;
    }

    try {
      const response = await fetch(API_BASE, API_LOGIN, {
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

      // Handle successful login here
      setEmail("");
      setPassword("");
      setError(null);
      console.log("Successful login!");
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
              aria-label="Email address"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <div className="mt-1">
              <Link to="/register" className="small" aria-label="Register User">
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
    </Container>
  );
}

export default Login;
