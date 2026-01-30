import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogRes from "./pages/LogRes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Teacher from "./pages/Teacher";
import Magazine from "./pages/Magazine";
import Academy from "./pages/Academy";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/reglog" element={<LogRes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
