import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  // Hide Navbar/Footer on login page and admin dashboard
  const isAuthOrAdminPage =
    location.pathname === "/reglog" ||
    location.pathname === "/login" ||
    location.pathname.startsWith("/admin");

  return (
    <div className="overflow-hidden">
      {!isAuthOrAdminPage && <Navbar />}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Yoga Programs */}
          <Route path="/yoga-programs/:slug" element={<YogaPrograms />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/YogaRetreat" element={<YogaRetreat />} />
          <Route path="/about" element={<About />} />

          {/* Auth Routes */}
          <Route path="/reglog" element={<LogRes />} />
          {/* Alias /login to /reglog so navigate("/login") works everywhere */}
          <Route path="/login" element={<Navigate to="/reglog" replace />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<DashBoard />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      {!isAuthOrAdminPage && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;