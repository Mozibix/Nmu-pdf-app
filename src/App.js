import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import Home from "./Components/Pages/HomePage";
import Level from "./Components/Pages/level_pages/Level";
import Bio102 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/BIo102";
import Chem5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102-5";
import Chem102_1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_1";
import Chem102_2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_2";
import Chem102_3 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_3";
import Chem102_4 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_4";
import Chem6 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_6";
import Eng104 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104";
import Eng104_2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_2";
import Eng104_3 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_3";
import Eng104_4 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_4";
import Eng104_5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_5";
import Eng104_6 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_6";
import Eng104_7 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_7";
import Eng104_8 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_8";
import Ges112 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Ges112";
import Ges2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Ges112-2";
import Ges3 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Ges112-3";
import Ges4 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Ges112-4";
import Ges5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Ges112-5";
import Mek1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mek103";
import Mek2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mek103_2";
import Mek3 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mek103_3";
import Mek4 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mek103_4";
import Mek5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mek103_5";
import Mth1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mth102_1";
import Mth2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Mth102_2";
import Pdf1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Pdf1";
import Phy102 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102";
import Phy10 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_10";
import Phy11 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_11";
import Phy12 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_12";
import Phy102_2 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_2";
import Phy102_3 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_3";
import Phy102_4 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_4";
import Phy5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_5";
import Phy6 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_6";
import Phy7 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_7";
import Phy8 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_8";
import Phy9 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_9";
import Tarma1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Tarma1";
import Pdf2 from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Pdf2";
import Tarma2 from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Tarma2";
import Pdf3 from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Pdf3";
import Tarma3 from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Tarma3";
import Tarma4 from "./Components/Pages/level_pages/Tarma Pages/Tarma4/Tarma4";
import Pdf5 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Pdf5";
import Tarma5 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Tarma5";
import Nav from "./Components/Pages/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route
              element={
                <>
                  <Nav />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/levels" element={<Level />} />
              <Route path="/about" element={<AboutPage />} />

              {/* TARMA PAGES */}
              <Route path="/tarma1" element={<Tarma1 />} />
              <Route path="/tarma2" element={<Tarma2 />} />
              <Route path="/tarma3" element={<Tarma3 />} />
              <Route path="/tarma4" element={<Tarma4 />} />
              <Route path="/tarma5" element={<Tarma5 />} />
            </Route>

            {/* DEMO PDFS */}
            <Route path="/page" element={<Pdf1 />} />
            <Route path="/page2" element={<Pdf2 />} />
            <Route path="/page3" element={<Pdf3 />} />
            <Route path="/page5" element={<Pdf5 />} />

            {/* MATH TARMA 1 */}
            <Route path="/math102_1" element={<Mth1 />} />
            <Route path="/math102_2" element={<Mth2 />} />

            {/* BIO TARMA 1 */}
            <Route path="/bio102" element={<Bio102 />} />

            {/* GES TARMA 1 */}
            <Route path="/ges112" element={<Ges112 />} />
            <Route path="/ges112_2" element={<Ges2 />} />
            <Route path="/ges112_3" element={<Ges3 />} />
            <Route path="/ges112_4" element={<Ges4 />} />
            <Route path="/ges112_5" element={<Ges5 />} />

            {/* ENG TARMA 1 */}
            <Route path="/eng104" element={<Eng104 />} />
            <Route path="/eng104_2" element={<Eng104_2 />} />
            <Route path="/eng104_3" element={<Eng104_3 />} />
            <Route path="/eng104_4" element={<Eng104_4 />} />
            <Route path="/eng104_5" element={<Eng104_5 />} />
            <Route path="/eng104_6" element={<Eng104_6 />} />
            <Route path="/eng104_7" element={<Eng104_7 />} />
            <Route path="/eng104_8" element={<Eng104_8 />} />

            {/* PHY TARMA 1 */}
            <Route path="/phy102_1" element={<Phy102 />} />
            <Route path="/phy102_2" element={<Phy102_2 />} />
            <Route path="/phy102_3" element={<Phy102_3 />} />
            <Route path="/phy102_4" element={<Phy102_4 />} />
            <Route path="/phy102_5" element={<Phy5/>} />
            <Route path="/phy102_6" element={<Phy6 />} />
            <Route path="/phy102_7" element={<Phy7 />} />
            <Route path="/phy102_8" element={<Phy8 />} />
            <Route path="/phy102_9" element={<Phy9 />} />
            <Route path="/phy102_10" element={<Phy10 />} />
            <Route path="/phy102_11" element={<Phy11 />} />
            <Route path="/phy102_12" element={<Phy12 />} />

            {/* CHEM TARMA 1 */}
            <Route path="/chem102_1" element={<Chem102_1 />} />
            <Route path="/chem102_2" element={<Chem102_2 />} />
            <Route path="/chem102_3" element={<Chem102_3 />} />
            <Route path="/chem102_4" element={<Chem102_4 />} />
            <Route path="/chem102_5" element={<Chem5 />} />
            <Route path="/chem102_6" element={<Chem6 />} />

            {/* MEK TARMA 1 */}
            <Route path="/mek103-1" element={<Mek1 />} />
            <Route path="/mek103-2" element={<Mek2 />} />
            <Route path="/mek103-3" element={<Mek3 />} />
            <Route path="/mek103-4" element={<Mek4 />} />
            <Route path="/mek103-5" element={<Mek5 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
