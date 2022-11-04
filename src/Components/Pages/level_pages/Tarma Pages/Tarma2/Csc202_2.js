import React from "react";
import { Link } from "react-router-dom";
import csc202_2 from "../../../../files/Tarma_pdf/tarma2_pdf/csc202_2.pptx";
import "../../../../Styles/gen_pdf.scss";
const Csc202B = () => {
  return (
    <>
      <section className="pdf_sec1">
        <div className="top">
          <div className="button">
            <Link className="links" to="/tarma2">
              Back to Courses
            </Link>{" "}
          </div>

          <div className="download">
            <Link
              className="links"
              target="_blank"
              rel="noreferrer"
              download
              to={csc202_2}
            >
              Download
            </Link>
          </div>
        </div>
        <div className="head_text">
          <h2>PDF VIEW</h2>
        </div>

        <div class="pdf">
          <iframe
            className="pdf_frame"
            src={csc202_2}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Csc202B;
