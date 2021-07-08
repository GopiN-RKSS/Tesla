import React from "react";
import HeaderLogo from "./HeaderLogo";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import "./Header.css";
import Signup from "./Signup";

function Header() {
  return (
    <>
      <div className="row row-cols-lg-3 header">
        <div className="col-md-2">
          <HeaderLogo />
        </div>
        <div className="col-md-4">
          <Menu />
        </div>
        <div className="col-md-4">
          <Signup />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Header;
