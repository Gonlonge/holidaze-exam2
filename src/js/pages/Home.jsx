import Nav from "../components/Nav";
import headerImage from "../../images/headerImage.svg";
import Cards from "../components/Cards";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div>
        <img className="responsive-img" src={headerImage} alt="Header" />
        <Nav />
        <Cards />
      </div>
    </Container>
  );
}
export default Home;
