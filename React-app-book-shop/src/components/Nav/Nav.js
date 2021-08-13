import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
function Nav(props) {
  return (
    <div className="header">
      <nav className="nav container">
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            activeClassName="link-selected"
            className="nav__link"
          >
            Home
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/cart"
            activeClassName="link-selected"
            className="nav__link"
          >
            Cart
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/selected"
            activeClassName="link-selected"
            className="nav__link"
          >
            Selected
          </NavLink>{" "}
        </li>
      </nav>
    </div>
  );
}

export default Nav;
