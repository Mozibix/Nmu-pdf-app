import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import pdf1 from "../files/1. ENG 104.2  - INTRODUCTION TO ENGINEER IN SOCIETY-2.pdf";
import "../Styles/home.scss";
const Home = () => {
  return (
    <>
      <main className="home-main">
        <section className="hero">
          <div className="descript_text">
            <p>
              Welcome to{" "}
              <span className="nmu">Nigerian Maritime University</span>{" "}
              <span className="pdf">
                {" "}
                <span className="pdf-text">pdf</span> web application
              </span>
              .<br />A Web Application that is created to enable students gain
              access to <span className="pdf-text">pdf</span> notes issued by
              the Lecturer or Course Rep.
            </p>
          </div>
        </section>

        <button>
          {" "}
          <Link className='links'  to="/levels">go to courses</Link>
        </button>
      </main>
    </>
  );
};

export default Home;


