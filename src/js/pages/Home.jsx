import Nav from "../components/Nav";
import headerImage from "../../images/headerImage.svg";
import { Container } from "react-bootstrap";
import GetApi from "../components/GetApi";

function Home() {
  return (
    <Container>
      <div>
        <img className="responsive-img" src={headerImage} alt="Header" />
        <Nav />
        <GetApi />
      </div>
      <div className="footer-margin"></div>
    </Container>
  );
}
export default Home;
