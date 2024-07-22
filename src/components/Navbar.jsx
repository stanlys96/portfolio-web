import { NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" data-nav-link>
            <div className="nav-subcontainer">
              <IoPerson />
              <span>About</span>
            </div>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" data-nav-link>
            <div className="nav-subcontainer">
              <MdOutlineWork />
              <span>Resume</span>
            </div>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link" data-nav-link>
            <div className="nav-subcontainer">
              <RiComputerFill />
              <span>Portfolio</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
