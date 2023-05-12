import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import { Container, Form, Button, Alert } from "react-bootstrap";
import LoadingIndicator from "./LoadingIndicator";

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
      const response = await fetch(`${API_BASE}${API_PROFILE}${name}/media`, {
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
      window.location.reload(); // Reload the current page
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
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Container>
      <Form.Group controlId="formBasicAvatar">
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
