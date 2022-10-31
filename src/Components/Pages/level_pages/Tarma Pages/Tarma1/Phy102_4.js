import React from "react";
import { Link } from "react-router-dom";
import phy4 from "../../../../files/Tarma_pdf/tarma1_pdf/phy102-4.pdf";
import "../../../../Styles/gen_pdf.scss";
const Phy102_4 = () => {
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
            to={phy4}
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
            src={phy4}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Phy102_4;
