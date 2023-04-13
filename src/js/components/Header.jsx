// import Nav from "./Nav";
import logoIcon from "../../images/umbrella-icon.png";

function Header() {
  return (
    <>
      <h1 className="center-text">
        {" "}
        <img className="logo-icon" src={logoIcon} alt="Logo" />
        Holidaze<span className="logo">.com</span>
      </h1>

      {/* <Nav /> */}
    </>
  );
}

export default Header;
