import React from "react";
import "./Sidebar.css";

function Signup() {
  return (
    <div>
      <ul className="side-items">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="side">
            SHOP
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="side">
            Tesla Account
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Signup;
