import React from "react";
import logo from "../images/nmu_textlogo.webp";
import "../Styles/nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav_main">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul>
            <li>home</li>
            <li>tarma/level</li>
            <li>about</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
