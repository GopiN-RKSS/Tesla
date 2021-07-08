import React, { useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Sidebar(props) {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="menu_icon text-center" onClick={() => setState(!state)}>
        <MenuIcon />
      </div>
      {state ? (
        <div
          className="sidebar"
          status={state}
          // style={{
          //   transform: `${() =>
          //     props.status ? "translateX(0)" : "translateX(100%)"}`,
          // }}
        >
          <div className="fend" onClick={() => setState(!state)}>
            <CloseIcon />
          </div>
          <ul>
            <li>Model X</li>
            <li>MOdel Y</li>
            <li>MOdel 3</li>
            <li>MOdel z</li>
            <li>Model N</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
