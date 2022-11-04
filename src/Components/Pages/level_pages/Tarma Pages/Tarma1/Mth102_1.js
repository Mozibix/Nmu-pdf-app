import React from "react";
import { Link } from "react-router-dom";
import math_1 from "../../../../files/Tarma_pdf/tarma1_pdf/MATH102-1.pdf";
import "../../../../Styles/gen_pdf.scss";
const Mth1 = () => {
  return (
    <>
      <section className="pdf_sec1">
        <div className="top">
          <Link className="links" to={"/tarma1"}>
            <div className="button">Back to Courses</div>
          </Link>{" "}
          <Link
            className="links"
            target="_blank"
            rel="noreferrer"
            download
            to={math_1}
          >
            <div className="download">Download</div>
          </Link>
        </div>
        <div className="head_text">
          <h2>PDF VIEW</h2>
        </div>

        <div class="pdf">
          <iframe
            className="pdf_frame"
            src={math_1}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Mth1;