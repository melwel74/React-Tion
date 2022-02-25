import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/About-me">
        About Me
      </NavLink>
      <NavLink activeClassName="active" to="/Portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
      <NavLink  activeClassName="active" to="/Resume">
        Resume
      </NavLink>
    </nav>
  );
}
export default Header;