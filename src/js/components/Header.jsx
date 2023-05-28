// Company Logo

import logoIcon from "../../images/umbrella-icon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="my-2">
        <Link to="/">
          <h1 className="center-text">
            <img className="logo-icon" src={logoIcon} alt="Logo" />
            Holidaze<span className="logo">.com</span>
          </h1>
        </Link>
        <div className="center-items"></div>
      </div>
    </>
  );
}

export default Header;
