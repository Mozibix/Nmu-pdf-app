import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.scss";
import Footer from "./Footer";
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
              the <span className="pdf">Lecturer</span> or{" "}
              <span className="pdf">Course Rep</span>.
            </p>
          </div>
        </section>

        <Link className="links" to="/levels">
          <button> go to courses</button>
        </Link>

        <Footer />
      </main>
    </>
  );
};

export default Home;
