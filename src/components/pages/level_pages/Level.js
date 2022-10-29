import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/levels.scss";

const Level = () => {
  return (
    <>
      <section className="level_page">
        <header>
          <h1>Levels/Tarma</h1>
        </header>

        <div className="lists_levels">
          <ul>
            <li>
              <Link className="links" to="/tarma1">
                Tarma-1
              </Link>{" "}
            </li>
            <li>
              <Link className="links" to="/tarma2">
                Tarma-2
              </Link>
            </li>
            <li>
              <Link className="links" to="/tarma3">
                Tarma-3
              </Link>
            </li>
            <li>
              <Link className="links" to="/tarma4">
                Tarma-4
              </Link>
            </li>
            <li>
              <Link className="links" to="/tarma5">
                Tarma-5
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Level;
