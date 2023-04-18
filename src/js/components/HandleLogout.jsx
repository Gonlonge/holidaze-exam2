import { Button, Container } from "react-bootstrap";

function HandleLogout() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // Add any additional clean up logic here, such as clearing user data from state
    window.location.href = "./"; // Redirect to the home page
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleLogout} aria-label="Logout">
        Logout
      </Button>
    </Container>
  );
}

export default HandleLogout;
