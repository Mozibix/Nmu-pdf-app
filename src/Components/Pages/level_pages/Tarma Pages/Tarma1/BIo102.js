import React from "react";
import { Link } from "react-router-dom";
import bio from "../../../../files/Tarma_pdf/tarma1_pdf/bio102-1.doc";
import "../../../../Styles/gen_pdf.scss";
const Bio102 = () => {
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
            to={bio}
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
            src={bio}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Bio102;
