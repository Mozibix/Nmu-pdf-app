import React from "react";
import { Link } from "react-router-dom";
import eng502_4 from "../../../../files/Tarma_pdf/tarma5_pdf/eng502_4.pdf";
import "../../../../Styles/gen_pdf.scss";
const Eng502D = () => {
  return (
    <>
      <section className="pdf_sec1">
        <div className="top">
          <div className="button">
            <Link className="links" to={"/tarma5"}>
              Back to Courses
            </Link>{" "}
          </div>

          <div className="download">
            <Link
              className="links"
              target="_blank"
              rel="noreferrer"
              download
              to={eng502_4}
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
            src={eng502_4}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Eng502D;
