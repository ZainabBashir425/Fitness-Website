import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { loginIcon,menuIcon,cancelbtn } from "../assets";
import "../css/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      <nav>
      <button className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="menu icon" />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <button className="close-icon" onClick={toggleMenu}>
            <img src={cancelbtn} alt="close icon" />
          </button>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              FAQs
            </NavLink>
          </li>
        </ul>
        <div className="nav-btns">
        <button className="contactBtn">
          <Link to="/contact">Contact Us</Link>
        </button>
        <Link to="/signup">
          <img src={loginIcon} alt="login" />
        </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
