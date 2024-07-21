import { NavLink, Navigate } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" data-nav-link>
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" data-nav-link>
            Resume
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link" data-nav-link>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
