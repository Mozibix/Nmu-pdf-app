import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/tarmas_gen_style.scss";

const Tarma4 = () => {
  return (
    <>
      <section className="tarma_course">
        <Link className="links" to={"/levels"}>
          <div className="button">Back to levels</div>
        </Link>{" "}
        <div className="tarma_flex">
          <div className="left_sec_inner">
            <h2 className="h2">under construction come back next semester</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarma4;
