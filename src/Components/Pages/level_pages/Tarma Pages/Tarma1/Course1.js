import React from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/gen_course.scss";
const Course1 = () => {
  return (
    <>
      <section className="course1_sec">
        <div className="header_text">
          <h2>Courses Offered By Tarma 1 (Crabs) </h2>
        </div>

        <div className="courses_list">
          <ul>
            {/* MTH SECTION */}
            <h2>mth 102 section</h2>
            <Link className="links" to="/math102_1">
              <li>mth 102.2(pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/math102_2">
              <li>mth 102.2(pdf 2)</li>
            </Link>{" "}
            {/* BIO SECTION */}
            <h2>bio 102 section</h2>
            <Link className="links" to="/bio102">
              <li>Bio 102.2</li>
            </Link>{" "}
            {/* GES SECTION */}
            <h2>ges 112 section</h2>
            <Link className="links" to="/ges112">
              <li>ges 112.2 (pdf 1)</li>
            </Link>{" "}
            <Link className="links" to="/ges112_2">
              <li>ges 112.2 (pdf 2)</li>
            </Link>{" "}
            <Link className="links" to="/ges112_3">
              <li>ges 112.2 (pdf 3)</li>
            </Link>{" "}
            <Link className="links" to="/ges112_4">
              <li>ges 112.2 (pdf 4)</li>
            </Link>{" "}
            <Link className="links" to="/ges112_5">
              <li>ges 112.2 (pdf 5)</li>
            </Link>{" "}
            {/* ENG SECTION */}
            <h2>eng 104 section</h2>
            <Link className="links" to="/eng104">
              <li>eng 104.2(PDF 1)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_2">
              <li>eng 104.2(PDF 2)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_3">
              <li>eng 104.2(PDF 3)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_4">
              <li>eng 104.2(PDF 4)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_5">
              <li>eng 104.2(PDF 5)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_6">
              <li>eng 104.2(PDF 6)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_7">
              <li>eng 104.2(PDF 7)</li>
            </Link>{" "}
            <Link className="links" to="/eng104_8">
              <li>eng 104.2(PDF 8)</li>
            </Link>{" "}
            {/* PHY SECTION */}
            <h2>phy 102 section</h2>
            <Link className="links" to="/phy102_1">
              <li>phy 102.2(PDF 1)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_2">
              <li>phy 102.2(PDF 2)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_3">
              <li>phy 102.2(PDF 3)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_4">
              <li>phy 102.2(PDF 4)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_5">
              <li>phy 102.2(PDF 5)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_6">
              <li>phy 102.2(PDF 6)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_7">
              <li>phy 102.2(PDF 7)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_8">
              <li>phy 102.2(PDF 8)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_9">
              <li>phy 102.2(PDF 9)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_10">
              <li>phy 102.2(PDF 10)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_11">
              <li>phy 102.2(PDF 11)</li>
            </Link>{" "}
            <Link className="links" to="/phy102_12">
              <li>phy 102.2(PDF 12)</li>
            </Link>{" "}
            {/* CHEM SECTION */}
            <h2>chem 102 section</h2>
            <Link className="links" to="/chem102_1">
              <li>chem 102.2(PDF 1)</li>
            </Link>{" "}
            <Link className="links" to="/chem102_2">
              <li>chem 102.2(PDF 2)</li>
            </Link>{" "}
            <Link className="links" to="/chem102_3">
              <li>chem 102.2(PDF 3)</li>
            </Link>{" "}
            <Link className="links" to="/chem102_4">
              <li>chem 102.2(PDF 4)</li>
            </Link>{" "}
            <Link className="links" to="/chem102_5">
              <li>chem 102.2(PDF 5)</li>
            </Link>{" "}
            <Link className="links" to="/chem102_6">
              <li>chem 102.2(PDF 6)</li>
            </Link>{" "}
            {/* MEK SECTION */}
            <h2>mek 103 section</h2>
            <Link className="links" to="/mek103-1">
              <li>mek 103.2(PDF 1)</li>
            </Link>{" "}
            <Link className="links" to="/mek103-2">
              <li>mek 103.2(PDF 2)</li>
            </Link>{" "}
            <Link className="links" to="/mek103-3">
              <li>mek 103.2(PDF 3)</li>
            </Link>{" "}
            <Link className="links" to="/mek103-4">
              <li>mek 103.2(PDF 4)</li>
            </Link>{" "}
            <Link className="links" to="/mek103-5">
              <li>mek 103.2(PDF 5)</li>
            </Link>{" "}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Course1;
