import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LogRes from "./pages/LogRes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Teacher from "./pages/Teacher";
import Magazine from "./pages/Magazine";
import Academy from "./pages/Academy";
import { ToastContainer } from "react-toastify";
import DashBoard from "./pages/DashBoard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const location = useLocation();
  return (
    <div className="overflow-hidden font-[IMFellEnglishSC]">
      {location.pathname !== "/reglog" && <Navbar />}


      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/reglog" element={<LogRes />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      {location.pathname !== "/reglog" && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

    </div>
  );
}

export default App;
