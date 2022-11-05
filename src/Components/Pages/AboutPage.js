import React from "react";
import "../Styles/about.scss";
import ceo from "../images/ceo.jpeg";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="footer">
          <div className="header_text">
            <p>
              <span className="">Dark Technologies</span> provides the latest
              <span> lecture notes and pdf materials </span>
              for the Cadets of{" "}
              <span className="nmu">nigerian maritime university</span> to help
              Cadets prepare for the upcoming exams
            </p>
          </div>

          <div className="ceo_info">
            <div className="about_ceo">
              <h3>about author</h3>
              <div className="image">
                <img src={ceo} alt="ceo of darktech" />
              </div>
              <p>
                <span className="">Dark Technologies</span> was created by Moses
                Opusunju, an Engineering Student of{" "}
                <span className="nmu">nigerian maritime university</span> and a{" "}
                <span>web developer</span> who loves using his skills to solve
                real world problems around him and also learning more about New
                Technologies.
              </p>

              <p className="contact">
                You can Contact him{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:opuzmoses@gmail.com"
                >
                  here
                </a>{" "}
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
