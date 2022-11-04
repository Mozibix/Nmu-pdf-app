import React from "react";
import { Link } from "react-router-dom";
import mrt232_1 from "../../../../files/Tarma_pdf/tarma2_pdf/mrt232_1.pdf";
import "../../../../Styles/gen_pdf.scss";
const Mrt232A = () => {
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
              to={mrt232_1}
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
            src={mrt232_1}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Mrt232A;
