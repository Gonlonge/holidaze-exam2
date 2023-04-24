import { Button } from "react-bootstrap";

function HandleLogout() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // Add any additional clean up logic here, such as clearing user data from state
    window.location.href = "./"; // Redirect to the home page
  };

  return (
    <Button
      className="logout-button"
      variant="primary"
      onClick={handleLogout}
      aria-label="Logout"
    >
      Logout
    </Button>
  );
}

export default HandleLogout;
