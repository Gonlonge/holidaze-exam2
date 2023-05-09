import Nav from "../components/Nav";
import { Container } from "react-bootstrap";
import AllVenues from "../components/AllVenues";

function Home() {
  return (
    <Container>
      <div>
        <Nav />
        <AllVenues />
      </div>
      <div className="footer-margin"></div>
    </Container>
  );
}
export default Home;
