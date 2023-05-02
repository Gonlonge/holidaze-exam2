import React, { useEffect, useState } from "react";
import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import profileImage from "../../images/cards.png";
import Nav from "../components/Nav";
import MenuProfile from "../components/MenuProfile";

function Profile() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const name = localStorage.getItem("name");
        console.log(API_BASE + API_PROFILE + name);
        console.log(token);
        const response = await fetch(API_BASE + API_PROFILE + name, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        const userData = await response.json();
        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  const handleImageUpload = (event) => {
    console.log("Image selected:", event.target.files[0]);
    setShowModal(false);
  };

  return (
    <Container>
      <div>
        <Row>
          <Col xs={12} md={8}>
            <div style={{ position: "relative" }}>
              {user.avatar ? (
                <img
                  className="rounded-image"
                  src={user.avatar}
                  alt={`Avatar for ${user.name}`}
                />
              ) : (
                <img
                  className="rounded-image"
                  src={profileImage}
                  alt="Default avatar"
                />
              )}
            </div>
            <div>
              <small>
                <button
                  className="edit-button"
                  onClick={() => setShowModal(true)}
                >
                  Edit
                </button>
              </small>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <small className="mt-2">Welcome Back, {user.name}!</small>
            <Row>
              <Col>
                <small>Email: {user.email}</small>
              </Col>
            </Row>
            <div className=" mt-0"></div>
          </Col>
        </Row>
        <div>
          <MenuProfile />
        </div>
        <div className="separator">
          <div className="mt-5">
            <small>
              <p>You have {user._count.bookings} bookings.</p>{" "}
              <div className="separator mt-0"></div>
            </small>

            <small>
              <p>You have {user._count.venues} venues.</p>{" "}
              <div className="separator mt-0"></div>
            </small>
          </div>
        </div>
        <div />

        {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Upload New Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("Save clicked")}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
      <div className="footer-margin"></div>
      <Nav />
    </Container>
  );
}

export default Profile;
