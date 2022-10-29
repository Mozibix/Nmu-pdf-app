import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/tarmas_gen_style.scss";
import Course2 from "./Course2";
const Tarma2 = () => {
  return (
    <>
      <section className="tarma_course">
        <div className="button">
          <Link className="links" to={"/levels"}>
            Back to levels
          </Link>{" "}
        </div>
        <div className="tarma_flex">
          <div className="left_sec_inner">
            <Course2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarma2;
