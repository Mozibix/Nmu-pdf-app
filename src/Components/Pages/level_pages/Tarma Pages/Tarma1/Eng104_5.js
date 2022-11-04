import React from "react";
import { Link } from "react-router-dom";
import eng104_5 from "../../../../files/Tarma_pdf/tarma1_pdf/ENG104-6.pdf";
import "../../../../Styles/gen_pdf.scss";
const Eng104E = () => {
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
            to={eng104_5}
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
            src={eng104_5}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Eng104E;
