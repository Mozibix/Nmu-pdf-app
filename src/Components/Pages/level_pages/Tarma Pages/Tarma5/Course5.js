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
            {/* MARINE SECTION */}
            <h2>marine section</h2>
            <Link className="links" to="/eng502_1">
              <li>eng 502.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/eng502_2">
              <li>eng 502.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eng502_3">
              <li>eng 502.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/eng502_4">
              <li>eng 502.2(pdf 4)</li>
            </Link>{" "}
            <Link className="links" to="/mae506_1">
              <li>mae 506.2</li>
            </Link>{" "}
            <Link className="links" to="/mae512_1">
              <li>mae 512.2</li>
            </Link>{" "}
            <Link className="links" to="/mae522_1">
              <li>mae 522.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/mae522_2">
              <li>mae 522.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/mae542_1">
              <li>mae 542.2</li>
            </Link>{" "}
            {/* PET AND GAS */}
            <h2>pet and gas section</h2>
            <Link className="links" to="/eng501_1">
              <li>eng 501.1</li>
            </Link>{" "}
            <Link className="links" to="/pge551_1">
              <li>pge 551.1</li>
            </Link>{" "}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Course5;
