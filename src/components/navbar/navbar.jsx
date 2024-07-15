import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logoText from "/logo-text.svg";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" />
          <img src={logoText} alt="Logo Text" />
        </NavLink>
      </div>

      <nav className="navbar__menu">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tv"}>Tv Shows</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
