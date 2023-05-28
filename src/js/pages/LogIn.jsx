import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { signIn } from "../ApiCalls";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Please enter your email address (name@noroff.no)";
    }

    if (!password) {
      errors.password = "Please enter your password";
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
      const response = await signIn(email, password);
      if (!response) {
        setError("Invalid email or password.");
        return;
      }

      setEmail("");
      setPassword("");
      setError(null);

      // Store the accessToken in localStorage
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("name", response.name);

      console.log("Successful login!");
      // Redirect to profile page
      navigate("/Profile");
    } catch {
      setIsError(true);
    }
  };

  if (isError) {
    return <ErrorIndicator />;
  }

  return (
    <Container>
      <div className="justify-content-center mt-5">
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@noroff.no"
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
            <Button
              className="btn btn-primary main-btn-color"
              variant="primary"
              type="submit"
              aria-label="Login"
            >
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
