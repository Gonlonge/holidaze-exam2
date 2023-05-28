import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HandleLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/"); // Redirect to the home page
  };

  return (
    <Button
      className="underline-button"
      variant="primary"
      onClick={handleLogout}
      aria-label="Logout"
    >
      <p>Log out</p>
    </Button>
  );
}

export default HandleLogout;
