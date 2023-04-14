import Nav from "../components/Nav";
import headerImage from "../../images/headerImage.svg";
// import Cards from "../components/Cards";
import { Container } from "react-bootstrap";
import GetApi from "../components/GetApi";

function Home() {
  return (
    <Container>
      <div>
        <img className="responsive-img" src={headerImage} alt="Header" />
        <Nav />
        <GetApi />
        {/* <Cards /> */}
      </div>
    </Container>
  );
}
export default Home;
