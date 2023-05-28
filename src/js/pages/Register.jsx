import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { signUp, signIn } from "../ApiCalls"; 

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

  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Please enter your name";
    }

    if (!formData.email) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Please enter a password";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {

      setIsError(false);
      setIsLoading(true);

      try { 
        const response = await signUp(formData);
        setIsLoading(false);
        if (response) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("name", response.name);
          try {
            const res = await signIn(formData.email, formData.password);
            if (!res) {
              // Edge case: user is created but login fails, shouldn't happen.
              setIsError(true);
              return;
            } else {
              // Store the accessToken in localStorage
              localStorage.setItem("accessToken", res.accessToken);
              localStorage.setItem("name", res.name);
              console.log("Successful login!");
              // Redirect to profile page
              navigate("/Profile");
            }
          } catch (error) {
            setIsError(true);
          }
        } else {
          window.alert('Something went wrong, please try again.');
        }
      } catch {
        setIsError(true);
      }
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
    return <LoadingIndicator />;
  }
  if (isError) {
    return <ErrorIndicator />;
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
              isInvalid={!!validationErrors.name}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@stud.noroff.no"
              value={formData.email}
              name="email"
              onChange={handleChange}
              isInvalid={!!validationErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              isInvalid={!!validationErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword" className="mt-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              isInvalid={!!validationErrors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.confirmPassword}
            </Form.Control.Feedback>
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
            <Button
              className="btn btn-primary main-btn-color"
              variant="primary"
              type="submit"
            >
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