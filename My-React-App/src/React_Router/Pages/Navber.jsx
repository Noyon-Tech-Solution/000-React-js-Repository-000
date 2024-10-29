import React from "react";
import { NavLink } from "react-router-dom";


const Navber = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:"sans-serif"
      }}
    >
      <NavLink
        to="/"
        style={{
          margin: "20px",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "1.3rem",
          color: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/blog"
        style={{
          margin: "20px",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "1.3rem",
          color: "white",
        }}
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        style={{
          margin: "20px",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "1.3rem",
          color: "white",
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navber;
