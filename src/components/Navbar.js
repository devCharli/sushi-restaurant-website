import { useState } from "react";
import { Link } from "react-scroll";
import "./css/navbar.css";
import { ReactComponent as CloseMenu } from "../images/icons/x.svg";
import { ReactComponent as MenuIcon } from "../images/icons/menu.svg";
import navImg from "../images/nav-img.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="header">
      <div className="navbar">
        <div className="nav-logo">
          <img src={navImg} />
          <Link
            onClick={closeMobileMenu}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <h1 className="nav-title">Akira Sushi</h1>
          </Link>
        </div>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <Link
            className="nav-item"
            onClick={closeMobileMenu}
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
          >
            Menu
          </Link>
          <Link
            className="nav-item"
            onClick={closeMobileMenu}
            to="location"
            spy={true}
            smooth={true}
            duration={500}
          >
            Location
          </Link>
          <Link
            className="nav-item"
            onClick={closeMobileMenu}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
