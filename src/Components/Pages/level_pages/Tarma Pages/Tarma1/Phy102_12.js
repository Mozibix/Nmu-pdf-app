import React from "react";
import { Link } from "react-router-dom";
import phy_12 from "../../../../files/Tarma_pdf/tarma1_pdf/phy102-12.pdf";
import "../../../../Styles/gen_pdf.scss";
const Phy12 = () => {
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
            to={phy_12}
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
            src={phy_12}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Phy12;