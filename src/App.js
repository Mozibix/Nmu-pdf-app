import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import Home from "./Components/Pages/HomePage";
import Level from "./Components/Pages/level_pages/Level";
import Pdf1 from "./Components/Pages/level_pages/Tarma Pages/Tarma1/Pdf1";
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
              <Route path="/" element={<Home/>} />
              <Route path="/levels" element={<Level />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tarma1" element={<Tarma1 />} />
              <Route path="/tarma2" element={<Tarma2 />} />
              <Route path="/tarma3" element={<Tarma3 />} />
              <Route path="/tarma4" element={<Tarma4 />} />
              <Route path="/tarma5" element={<Tarma5 />} />
            </Route>
            <Route path="/page" element={<Pdf1 />} />
            <Route path="/page2" element={<Pdf2 />} />
            <Route path="/page3" element={<Pdf3 />} />
            <Route path="/page5" element={<Pdf5 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
