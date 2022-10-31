import React from "react";
import { Link } from "react-router-dom";
import pdf1 from "../../../../files/1. ENG 104.2  - INTRODUCTION TO ENGINEER IN SOCIETY-2.pdf";
import "../../../../Styles/gen_pdf.scss";
const Pdf1 = () => {
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
              to={pdf1}
            >
          <div className="download">
              Download
          </div>
            </Link>
        </div>
        <div className="head_text">
          <h2>PDF VIEW</h2>
        </div>

        <div class="pdf">
          <iframe
            className="pdf_frame"
            src={pdf1}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Pdf1;
