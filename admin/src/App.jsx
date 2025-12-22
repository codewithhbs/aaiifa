import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Registrations from "./pages/Registrations";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import SteelHandbook from "./pages/SteelHandbook";
import Newsletter from "./pages/Newsletter";
import TeamCategories from "./pages/TeamCategories";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import Settings from "./settings/settings";
import Login from "./pages/Login";

import { Toaster } from "react-hot-toast";

// Private route wrapper
function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("auth");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Title mapping
const titleMap = {
  "/": "Dashboard",
  "/memberships": "Memberships",
  "/teams": "Teams",
   "/team-categories": "Team Categories", 
  "/blogs": "Blogs",
  "/contact": "Contact",
   "/steel-handbook": "Steel Handbook",
  "/newsletter": "Newsletter",
  "/blogs/new": "Add New Blog",
  "/settings": "Web Settings",
  "/login": "Login",
};

// Layout component (inside Router)
function Layout({ open, setOpen, children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  // Get title dynamically from the map
  const currentTitle = titleMap[location.pathname] || "Aaiifa Admin";

  if (isLoginPage) {
    return (
      <>
        <Helmet>
          <title>{currentTitle} | AIIFA Admin</title>
        </Helmet>
        {children}
      </>
    );
  }

  return (
    <>
      {/* Dynamic Helmet Title */}
      <Helmet>
        <title>{currentTitle} | AIIFA Admin</title>
      </Helmet>

      <div className="flex h-screen overflow-hidden bg-gray-50">
        <aside className="h-full overflow-y-auto bg-white shadow-md">
          <Sidebar open={open} />
        </aside>

        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header open={open} setOpen={setOpen} />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />

      <Layout open={open} setOpen={setOpen}>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/memberships"
            element={
              <PrivateRoute>
                <Registrations />
              </PrivateRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <PrivateRoute>
                <Teams />
              </PrivateRoute>
            }
          />

             <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />

          <Route
            path="/steel-handbook"
            element={
              <PrivateRoute>
                <SteelHandbook />
              </PrivateRoute>
            }
          />

          <Route
            path="/newsletter"
            element={
              <PrivateRoute>
                <Newsletter />
              </PrivateRoute>
            }
          />
          
          
          <Route
        path="/team-categories"
        element={
          <PrivateRoute>
            <TeamCategories />
          </PrivateRoute>
        }
      />



          <Route
            path="/blogs"
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs/new"
            element={
              <PrivateRoute>
                <AddBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
