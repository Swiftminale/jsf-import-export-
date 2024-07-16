import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/img/logo/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-center">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
