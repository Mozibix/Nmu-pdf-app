import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/tarmas_gen_style.scss";
import Course1 from "./Course1";
const Tarma1 = () => {
  return (
    <>
      <section className="tarma_course">
        <Link className="links" to={"/levels"}>
          <div className="button">Back to levels</div>
        </Link>{" "}
        <div className="tarma_flex">
          <div className="left_sec_inner">
            <Course1 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarma1;
