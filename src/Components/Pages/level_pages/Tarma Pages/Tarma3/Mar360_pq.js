import React from "react";
import { Link } from "react-router-dom";
import mar360_pq from "../../../../files/Tarma_pdf/tarma3_pdf/mar360_pq.pdf";
import "../../../../Styles/gen_pdf.scss";
const Mar360Pq = () => {
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
              to={mar360_pq}
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
            src={mar360_pq}
            frameborder="0"
            title="pdf"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Mar360Pq;
