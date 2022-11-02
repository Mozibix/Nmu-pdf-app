import React from "react";
import { Link } from "react-router-dom";
import eee326_2 from "../../../../files/Tarma_pdf/tarma3_pdf/eee326_2.pdf";
import "../../../../Styles/gen_pdf.scss";
const Eee326B = () => {
  return (
    <>
      <section className="pdf_sec1">
        <div className="top">
          <div className=" button">
            <Link className="links" to={"/tarma3"}>
              Back to Courses
            </Link>{" "}
          </div>

          <div className=" download">
            <Link
              className="links"
              target="_blank"
              rel="noreferrer"
              download
              to={eee326_2}
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
            src={eee326_2}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Eee326B;
