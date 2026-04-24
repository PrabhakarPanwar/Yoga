import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LogRes from "./pages/LogRes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import DashBoard from "./pages/DashBoard";
import PageNotFound from "./pages/PageNotFound";
import YogaRetreat from "./pages/YogaRetreat";
import About from "./pages/About";
import YogaPrograms from "./pages/YogaPrograms";

function App() {
  const location = useLocation();
  return (
    <div className="overflow-hidden">
      {location.pathname !== "/reglog" && <Navbar />}

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Yoga Programs — individual slug routes */}
          <Route path="/yoga-programs/:slug" element={<YogaPrograms />} />

          {/* Keep old /teacher route working (backward compat) */}
          <Route path="/teacher" element={<YogaPrograms />} />

          <Route path="/YogaRetreat" element={<YogaRetreat />} />
          <Route path="/about" element={<About />} />
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