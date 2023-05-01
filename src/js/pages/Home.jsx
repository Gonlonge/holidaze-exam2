import Nav from "../components/Nav";
import { Container } from "react-bootstrap";
import GetApi from "../components/GetApi";

function Home() {
  return (
    <Container>
      <div>
        <Nav />
        <GetApi />
      </div>
      <div className="footer-margin"></div>
    </Container>
  );
}
export default Home;
