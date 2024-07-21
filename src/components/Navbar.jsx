import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a
            href="/"
            className={`navbar-link ${
              location.pathname === "/" && "active-link"
            }`}
            data-nav-link
          >
            About
          </a>
        </li>

        <li className="navbar-item">
          <a
            href="/resume"
            className={`navbar-link ${
              location.pathname === "/resume" && "active-link"
            }`}
            data-nav-link
          >
            Resume
          </a>
        </li>

        <li className="navbar-item">
          <a
            href="/portfolio"
            className={`navbar-link ${
              location.pathname === "/portfolio" && "active-link"
            }`}
            data-nav-link
          >
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
