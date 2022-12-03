import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/gen_course.scss";
const Course2 = () => {
  return (
    <>
      <section className="course1_sec">
        <div className="header_text">
          <h2>Courses Offered By Tarma 2 (Cadets) </h2>
        </div>

        <div className="courses_list">
          <ul>
            {/* ENG 202.2 */}
            <h2>eng maths section</h2>
            <Link className="links" to="/csc202_1">
              <li>eng 202.2(eng maths )</li>
            </Link>{" "}
            {/* CSC 202.2 */}
            <h2>computer section</h2>
            <Link className="links" to="/csc202_1">
              <li>csc 202.2(computer programming)</li>
            </Link>{" "}
            <Link className="links" to="/csc202_2">
              <li>csc 202.2(pdf 2)</li>
            </Link>{" "}
            {/* ENG 212.2 */}
            <h2>strength of materials section</h2>
            <Link className="links" to="/eng212_1">
              <li>eng 212.2(deflection of beams)</li>
            </Link>{" "}
            <Link className="links" to="/eng212_2">
              <li>eng 212.2(pdf 2)</li>
            </Link>{" "}
            {/* ENG 222.2 */}
            <h2>basic elect 2 section</h2>
            <Link className="links" to="/eng222_1">
              <li>eng 222.2</li>
            </Link>{" "}
            {/* ENG 244.2 */}
            <h2>workshop pract. section</h2>
            <Link className="links" to="/eng244_1">
              <li>eng 244.2(workshop practice)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_2">
              <li>eng 244.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_3">
              <li>eng 244.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_4">
              <li>eng 244.2(pdf 4)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_5">
              <li>eng 244.2(pdf 5)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_6">
              <li>eng 244.2(refrigeration)</li>
            </Link>{" "}
            <Link className="links" to="/eng244_7">
              <li>eng 244.2(pdf 7)</li>
            </Link>{" "}
            {/* ENG 246.2 */}
            <h2>engine drawing section</h2>
            <Link className="links" to="/eng246_1">
              <li>eng 246.2(assembly)</li>
            </Link>{" "}
            <Link className="links" to="/eng246_2">
              <li>eng 246.2(tolerance and limit)</li>
            </Link>{" "}
            {/* ENG 249.2 */}
            <h2>fluid mechanics section</h2>
            <Link className="links" to="/eng246_1">
              <li>eng 249.2(fluid mechanics)</li>
            </Link>{" "}
            {/* MRT 232.2 */}
            <h2>seamanship section</h2>
            <Link className="links" to="/mrt232_1">
              <li>mrt 232.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/mrt232_2">
              <li>mrt 232.2(pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/mrt232_3">
              <li>mrt 232.2(pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/mrt232_4">
              <li>mrt 232.2(wires and wire ropes)</li>
            </Link>{" "}
            <Link className="links" to="/mrt232_5">
              <li>mrt 232.2(ship and ship routine)</li>
            </Link>{" "}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Course2;
