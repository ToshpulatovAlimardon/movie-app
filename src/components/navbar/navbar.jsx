import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logoText from "/logo-text.svg";
import logo from "/logo.svg";
import { navbar_links } from "../../constants";

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
          {navbar_links.map((item) => (
            <li key={item.route}>
              <NavLink
                to={item.route}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
