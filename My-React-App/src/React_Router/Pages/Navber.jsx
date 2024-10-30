import React from "react";
import { NavLink } from "react-router-dom";
import './Style.css'


const Navber = () => {
  return (
    <nav className="navber">
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/blogs">Blogs</NavLink>
      <NavLink className="navlink" to="/contact"> Contact</NavLink>
    </nav>
  );
};

export default Navber;
