import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import Home from "./Components/Pages/HomePage";
import Level from "./Components/Pages/level_pages/Level";
import Bio102 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/BIo102";
import Chem5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102-5";
import Chem102A from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_1";
import Chem102B from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_2";
import Chem102C from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_3";
import Chem102D from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_4";
import Chem6 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Chem102_6";
import Eng104 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104";
import Eng104B from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_2";
import Eng104C from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_3";
import Eng104D from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_4";
import Eng104E from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_5";
import Eng104F from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_6";
import Eng104G from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_7";
import Eng104H from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Eng104_8";
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
import Phy102 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102";
import Phy10 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_10";
import Phy11 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_11";
import Phy12 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_12";
import Phy102B from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_2";
import Phy102C from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_3";
import Phy102D from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_4";
import Phy5 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_5";
import Phy6 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_6";
import Phy7 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_7";
import Phy8 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_8";
import Phy9 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Phy102_9";
import Tarma1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Tarma1";
import Csc202A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Csc202_1";
import Csc202B from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Csc202_2";
import Eng202A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng202_1";
import Eng212A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng212_1";
import Eng212B from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng212_2";
import Eng212C from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng212_3";
import Eng222A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng222_1";
import Eng244A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_1";
import Eng244B from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_2";
import Eng244C from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_3";
import Eng244D from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_4";
import Eng244E from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_5";
import Eng244F from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_6";
import Eng244G from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_7";
import Eng244H from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng244_8";
import Eng246A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng246_1";
import Eng246B from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng246_2";
import Eng246C from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng246_3";
import Eng249A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Eng249_1";
import Mrt232A from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Mrt232_1";
import Mrt232B from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Mrt232_2";
import Mrt232C from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Mrt232_3";
import Mrt232D from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Mrt232_4";
import Mrt232E from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Mrt232_5";
import Tarma2 from "./Components/Pages/level_pages/Tarma Pages/Tarma2/Tarma2";
import Eee310 from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee310";
import Eee310B from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee310_2";
import Eee310C from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee310_3";
import Eee322A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee322_1";
import Eee323A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee323_1";
import Eee323B from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee323_2";
import Eee323C from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee323_3";
import Eee323D from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee323_4";
import Eee326A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_1";
import Eee326J from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_10";
import Eee326K from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_11";
import Eee326B from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_2";
import Eee326C from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_3";
import Eee326D from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_4";
import Eee326E from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_5";
import Eee326F from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_6";
import Eee326G from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_7";
import Eee326H from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_8";
import Eee326I from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee326_9";
import Eee327A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee327_1";
import Eee327B from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee327_2";
import Eee327C from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee327_3";
import Eee327D from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Eee327_4";
import Mar360A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mar360_1";
import Mar360Pq from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mar360_pq";
import Mee342A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mee342_1";
import Mee342B from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mee342_2";
import Mee342C from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mee342_3";
import Mee342D from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mee342_4";
import Mth308A from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mth308_1";
import Mth308Pq from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Mth308_pq";
import SteamTable from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Steam-Table";
import Tarma3 from "./Components/Pages/level_pages/Tarma Pages/Tarma3/Tarma3";
import Tarma4 from "./Components/Pages/level_pages/Tarma Pages/Tarma4/Tarma4";
import Eng501 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Eng501_1";
import Eng502A from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Eng502_1";
import Eng502B from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Eng502_2";
import Eng502C from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Eng502_3";
import Eng502D from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Eng502_4";
import Mae506 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Mae506_1";
import Mae512 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Mae512_1";
import Mae522A from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Mae522_1";
import Mae522B from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Mae522_2";
import Mae542 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Mae542_1";
import Pge551 from "./Components/Pages/level_pages/Tarma Pages/Tarma5/Pge551_1";
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

            {/* TARMA 1 */}
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
            <Route path="/eng104_2" element={<Eng104B />} />
            <Route path="/eng104_3" element={<Eng104C />} />
            <Route path="/eng104_4" element={<Eng104D />} />
            <Route path="/eng104_5" element={<Eng104E />} />
            <Route path="/eng104_6" element={<Eng104F />} />
            <Route path="/eng104_7" element={<Eng104G />} />
            <Route path="/eng104_8" element={<Eng104H />} />

            {/* PHY TARMA 1 */}
            <Route path="/phy102_1" element={<Phy102 />} />
            <Route path="/phy102_2" element={<Phy102B />} />
            <Route path="/phy102_3" element={<Phy102C />} />
            <Route path="/phy102_4" element={<Phy102D />} />
            <Route path="/phy102_5" element={<Phy5 />} />
            <Route path="/phy102_6" element={<Phy6 />} />
            <Route path="/phy102_7" element={<Phy7 />} />
            <Route path="/phy102_8" element={<Phy8 />} />
            <Route path="/phy102_9" element={<Phy9 />} />
            <Route path="/phy102_10" element={<Phy10 />} />
            <Route path="/phy102_11" element={<Phy11 />} />
            <Route path="/phy102_12" element={<Phy12 />} />

            {/* CHEM TARMA 1 */}
            <Route path="/chem102_1" element={<Chem102A />} />
            <Route path="/chem102_2" element={<Chem102B />} />
            <Route path="/chem102_3" element={<Chem102C />} />
            <Route path="/chem102_4" element={<Chem102D />} />
            <Route path="/chem102_5" element={<Chem5 />} />
            <Route path="/chem102_6" element={<Chem6 />} />

            {/* MEK TARMA 1 */}
            <Route path="/mek103-1" element={<Mek1 />} />
            <Route path="/mek103-2" element={<Mek2 />} />
            <Route path="/mek103-3" element={<Mek3 />} />
            <Route path="/mek103-4" element={<Mek4 />} />
            <Route path="/mek103-5" element={<Mek5 />} />

            {/* TARMA 2 */}
            {/* ENG 202.2 ENGINE MATHS */}
            <Route path="/eng202_1" element={<Eng202A />} />

            {/* CSC 202.2 */}
            <Route path="/csc202_1" element={<Csc202A />} />
            <Route path="/csc202_2" element={<Csc202B />} />

            {/* ENG 212.2 */}
            <Route path="/eng212_1" element={<Eng212A />} />
            <Route path="/eng212_2" element={<Eng212B />} />
            <Route path="/eng212_3" element={<Eng212C />} />

            {/* ENG 222.2  BASIC ELECT */}
            <Route path="/eng222_1" element={<Eng222A />} />

            {/* ENG 244.2 */}
            <Route path="/eng244_1" element={<Eng244A />} />
            <Route path="/eng244_2" element={<Eng244B />} />
            <Route path="/eng244_3" element={<Eng244C />} />
            <Route path="/eng244_4" element={<Eng244D />} />
            <Route path="/eng244_5" element={<Eng244E />} />
            <Route path="/eng244_6" element={<Eng244F />} />
            <Route path="/eng244_7" element={<Eng244G />} />
            <Route path="/eng244_8" element={<Eng244H />} />

            {/* ENG 246.2 */}
            <Route path="/eng246_1" element={<Eng246A />} />
            <Route path="/eng246_2" element={<Eng246B />} />
            <Route path="/eng246_3" element={<Eng246C />} />

            {/* ENG 249.2 */}
            <Route path="/eng249_1" element={<Eng249A />} />

            {/* MRT 232.2 */}
            <Route path="/mrt232_1" element={<Mrt232A />} />
            <Route path="/mrt232_2" element={<Mrt232B />} />
            <Route path="/mrt232_3" element={<Mrt232C />} />
            <Route path="/mrt232_4" element={<Mrt232D />} />
            <Route path="/mrt232_5" element={<Mrt232E />} />

            {/* TARMA 3 */}

            {/* ENG MATHS 308.2 */}
            <Route path="/mths308_1" element={<Mth308A />} />
            <Route path="/mths308_pq" element={<Mth308Pq />} />

            {/* STEAM TABLE */}
            <Route path="/steamtable" element={<SteamTable />} />

            {/* ELECTRICAL SECTION */}
            {/* EEE310  */}
            <Route path="/eee310_1" element={<Eee310 />} />
            <Route path="/eee310_2" element={<Eee310B />} />
            <Route path="/eee310_3" element={<Eee310C />} />

            {/* EEE 322.2 */}
            <Route path="/eee322_1" element={<Eee322A />} />

            {/* EEE 323.2 */}
            <Route path="/eee323_1" element={<Eee323A />} />
            <Route path="/eee323_2" element={<Eee323B />} />
            <Route path="/eee323_3" element={<Eee323C />} />
            <Route path="/eee323_4" element={<Eee323D />} />

            {/* EEE326.2  */}
            <Route path="/eee326_1" element={<Eee326A />} />
            <Route path="/eee326_2" element={<Eee326B />} />
            <Route path="/eee326_3" element={<Eee326C />} />
            <Route path="/eee326_4" element={<Eee326D />} />
            <Route path="/eee326_5" element={<Eee326E />} />
            <Route path="/eee326_6" element={<Eee326F />} />
            <Route path="/eee326_7" element={<Eee326G />} />
            <Route path="/eee326_8" element={<Eee326H />} />
            <Route path="/eee326_9" element={<Eee326I />} />
            <Route path="/eee326_10" element={<Eee326J />} />
            <Route path="/eee326_11" element={<Eee326K />} />

            {/* ELECTRICAL MACHINES */}
            {/* EEE327.2 */}
            <Route path="/eee327_1" element={<Eee327A />} />
            <Route path="/eee327_2" element={<Eee327B />} />
            <Route path="/eee327_3" element={<Eee327C />} />
            <Route path="/eee327_4" element={<Eee327D />} />

            {/* MARINE SECTION */}
            {/* MAR 360.2 */}
            <Route path="/mar360_1" element={<Mar360A />} />
            <Route path="/mar360_pq" element={<Mar360Pq />} />

            {/* MEE 342.2 */}
            <Route path="/mee342_1" element={<Mee342A />} />
            <Route path="/mee342_2" element={<Mee342B />} />
            <Route path="/mee342_3" element={<Mee342C />} />
            <Route path="/mee342_4" element={<Mee342D />} />

            {/* TARMA 5 */}
            {/* MARINE SECTION */}
            {/* ENG 502.2 */}
            <Route path="/eng502_1" element={<Eng502A />} />
            <Route path="/eng502_2" element={<Eng502B />} />
            <Route path="/eng502_3" element={<Eng502C />} />
            <Route path="/eng502_4" element={<Eng502D />} />

            {/* MAE 506.2 */}
            <Route path="/mae506_1" element={<Mae506 />} />

            {/* MAE 512.2 */}
            <Route path="/mae512_1" element={<Mae512 />} />

            {/* MAE 522.2 */}
            <Route path="/mae522_1" element={<Mae522A />} />
            <Route path="/mae522_2" element={<Mae522B />} />

            {/* MAE 542.2 */}
            <Route path="/mae542_1" element={<Mae542 />} />

            {/* PET AND GAS SECTION */}
            {/* PGE 551.1 */}
            <Route path="/pge551_1" element={<Pge551 />} />

            {/* ENG 501.1 */}
            <Route path="/eng501_1" element={<Eng501 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
