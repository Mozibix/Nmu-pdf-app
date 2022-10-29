import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/gen_course.scss";
const Course5 = () => {
  return (
    <>
      <section className="course1_sec">
        <div className="header_text">
          <h2>Courses Offered By Tarma 5 (GENERALS) </h2>
        </div>

        <div className="courses_list">
          <ul>
            <li>
              <Link className="links" to="/page5">eng 101.5</Link>{" "}
            </li>
            <li>
              <Link className="links" to="/page5">eng 101.5</Link>{" "}
            </li>
            <li>
              <Link className="links" to="/page5">eng 101.5</Link>{" "}
            </li>
            <li>
              <Link className="links" to="/page5">eng 101.5</Link>{" "}
            </li>
            <li>eng 101.5</li>
            <li>eng 101.5</li>
            <li>eng 101.5</li>
            <li>eng 101.5</li>
            <li>eng 101.5</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Course5;
