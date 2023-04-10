import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="navLinks">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Conatct Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

