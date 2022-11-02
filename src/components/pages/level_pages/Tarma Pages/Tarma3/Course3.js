import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/gen_course.scss";
const Course3 = () => {
  return (
    <>
      <section className="course1_sec">
        <div className="header_text">
          <h2>Courses Offered By Tarma 3 (officer Cadets) </h2>
        </div>

        <div className="courses_list">
          <ul>
            {/* MATHS 308.2 */}
            <h2>maths308.2 section</h2>
            <Link className="links" to="/mths308_1">
              <li>mths 308.2</li>
            </Link>{" "}
            <Link className="links" to="/mths308_pq">
              <li>mths 308.2(past questions)</li>
            </Link>{" "}
            {/* STEAM TABLE */}
            <h2>steam table</h2>
            <Link className="links" to="/steamtable">
              <li>steam table</li>
            </Link>{" "}
            {/* EEE 310.2 */}
            <h2>electrical section</h2>
            <Link className="links" to="/eee310_1">
              <li>eee 310.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/eee310_2">
              <li>eee 310.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eee310_3">
              <li>eee 310.2(pdf 3)</li>
            </Link>{" "}
            {/* EEE 322 */}
            <Link className="links" to="/eee322_1">
              <li>eee 322.2</li>
            </Link>{" "}
            {/* EEE 323 */}
            <Link className="links" to="/eee323_1">
              <li>eee 323.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/eee323_2">
              <li>eee 323.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eee323_3">
              <li>eee 323.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/eee323_4">
              <li>eee 323.2(pdf 4)</li>
            </Link>{" "}
            {/* EEE 326.2 */}
            <Link className="links" to="/eee326_1">
              <li>eee 326.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_2">
              <li>eee 326.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_3">
              <li>eee 326.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_4">
              <li>eee 326.2(pdf 4)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_5">
              <li>eee 326.2(pdf 5)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_6">
              <li>eee 326.2(pdf 6)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_7">
              <li>eee 326.2(pdf 7)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_8">
              <li>eee 326.2(pdf 8)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_9">
              <li>eee 326.2(pdf 9)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_10">
              <li>eee 326.2(pdf 10)</li>
            </Link>{" "}
            <Link className="links" to="/eee326_11">
              <li>eee 326.2(pdf 11)</li>
            </Link>{" "}
            {/* EEE 327.2 */}
            <Link className="links" to="/eee327_1">
              <li>eee 327.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/eee327_2">
              <li>eee 327.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eee327_3">
              <li>eee 327.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/eee327_4">
              <li>eee 327.2(pdf 4)</li>
            </Link>{" "}
            {/* MAR 360.2 */}
            <h2>marine section</h2>
            <Link className="links" to="/mar360_1">
              <li>mar 360.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/mar360_pq">
              <li>mar 360.2(past questions)</li>
            </Link>{" "}
            {/* MEE 342.2 */}
            <Link className="links" to="/mee342_1">
              <li>mee 342.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/mee342_2">
              <li>mee 342.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/mee342_3">
              <li>mee 342.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/mee342_4">
              <li>mee 342.2(pdf 4)</li>
            </Link>{" "}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Course3;
