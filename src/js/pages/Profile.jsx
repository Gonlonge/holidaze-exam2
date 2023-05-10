import React, { useEffect, useState } from "react";
import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import { Row, Col, Container, Modal } from "react-bootstrap";
import profileImage from "../../images/cards.png";
import Nav from "../components/Nav";
import MenuProfile from "../components/MenuProfile";
import AvatarModal from "../components/AvatarModal";
import MyVenues from "../components/MyVenues";
import Bookings from "../components/MyBookings";

function Profile() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const name = localStorage.getItem("name");
        console.log(API_BASE + API_PROFILE + name);

        const response = await fetch(API_BASE + API_PROFILE + name, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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

  return (
    <Container>
      <div>
        <Row>
          <Col xs={12} md={8}>
            <div style={{ position: "relative" }}>
              {user.avatar ? (
                <img className="rounded-image" src={user.avatar} alt="" />
              ) : (
                <img className="rounded-image" src={profileImage} alt="" />
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

        <div className="mt-5">
          <h5>You have {user._count.bookings} bookings.</h5>{" "}
          <div className="separator mt-0"></div>
          <Bookings />
          <h5>My Venues:</h5> <div className="separator mt-0"></div>
          <MyVenues />
        </div>
        <div />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton></Modal.Header>
          <div className="mt-4 d-flex justify-content-center align-items-center ">
            <img className="img-fluid" src={user.avatar} alt="" />
          </div>
          <div className="mt-4">
            <AvatarModal />
          </div>
        </Modal>
      </div>
      <div className="footer-margin"></div>
      <Nav />
    </Container>
  );
}

export default Profile;
