import React from "react";
// import { Link } from "react-router-dom";
// import pdf1 from "../files/1. ENG 104.2  - INTRODUCTION TO ENGINEER IN SOCIETY-2.pdf";

const Home = () => {
  return (
    <>
      <main className="home-main">
        <section className="hero">
          <div className="descript_text">
            <p>
              Welcome to <span>Nigerian Maritime University</span>{" "}
              <span className="pdf">pdf web application</span>
              <br />A web application that is created to enable students gain
              access to pdf notes issued by the lecturer or course rep
            </p>
          </div>
        </section>

        {/* <div class="pdf">
          <iframe
            src={pdf1}
            width="100%"
            frameborder="0"
            title="pdf"
          ></iframe>
          <p>hello world</p>
          <a
            target="_blank"
            download
            href={pdf1}
          >
            Download
          </a>
        </div> */}

        <button> go to courses</button>
      </main>
    </>
  );
};

export default Home;
