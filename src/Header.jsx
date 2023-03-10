import React from "react";
import { Link, NavLink } from "react-router-dom";

const styleActive = {
  color: "blue",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={styleActive} to="/shoes">Shoes</NavLink>
          </li>
          <li>
            <NavLink activeStyle={styleActive} to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
