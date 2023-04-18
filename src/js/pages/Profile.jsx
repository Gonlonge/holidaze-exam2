import React, { useEffect, useState } from "react";
import { API_BASE, API_PROFILE } from "../ApiEndpoints";
import { Container } from "react-bootstrap";
import HandleLogout from "../components/HandleLogout";

function Profile() {
  const [user, setUser] = useState(null);

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

  return (
    <Container>
      <h1>Welcome, {user.name}!</h1>
      <h2>Email: {user.email}</h2>
      <HandleLogout />
      {/* Add more user information and features here */}
    </Container>
  );
}

export default Profile;
