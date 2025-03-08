import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="brand-name">StudentNexus</div>
      <ul className="nav-items"></ul>
    </nav>
  );
};

export default Navbar;
