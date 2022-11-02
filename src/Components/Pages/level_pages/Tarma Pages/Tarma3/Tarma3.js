import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/tarmas_gen_style.scss";
import Course3 from "./Course3";

const Tarma3 = () => {
  return (
    <>
      <section className="tarma_course">
        <Link className="links" to={"/levels"}>
          <div className="button">Back to levels</div>
        </Link>{" "}
        <div className="tarma_flex">
          <div className="left_sec_inner">
            <Course3 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarma3;
