// import Nav from "./Nav";
import logoIcon from "../../images/umbrella-icon.png";

function Header() {
  return (
    <>
      <div className="my-2">
        <h1 className="center-text">
          <img className="logo-icon" src={logoIcon} alt="Logo" />
          Holidaze<span className="logo">.com</span>
        </h1>
        <div className="center-items"></div>
      </div>
    </>
  );
}

export default Header;
