import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/nmu_textlogo.webp";
import "../Styles/nav.scss";

const Nav = () => {
  return (
    <>
      <section>
        <nav>
          <div className="nav_main">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <ul>
              <li>
                <Link className="links" to="/">home</Link>{" "}
              </li>
              <li>
                <Link className="links" to="/levels">tarma/level</Link>
              </li>
              <li>
                <Link className="links" to="/aboutpage">about</Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
