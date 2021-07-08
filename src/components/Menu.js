import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <ul className="menu-items">
        <li>
          <a className="nav-link" href="model">
            Model S
          </a>
        </li>
        <li>
          <a className="nav-link" href="model">
            Model 3
          </a>
        </li>

        <li>
          <a className="nav-link" href="model">
            Model X
          </a>
        </li>
        <li>
          <a className="nav-link" href="model">
            Model Y
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
