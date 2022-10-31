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
            <Link className="links" to="/tarma1">
              <li>Tarma-1</li>
            </Link>{" "}
            <Link className="links" to="/tarma2">
              <li>Tarma-2</li>
            </Link>
            <Link className="links" to="/tarma3">
              <li>Tarma-3</li>
            </Link>
            <Link className="links" to="/tarma4">
              <li>Tarma-4</li>
            </Link>
            <Link className="links" to="/tarma5">
              <li>Tarma-5</li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Level;
