import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  UserPlus,
  Layers,
  FileText,
  ChevronDown,
  ChevronUp,
  Globe,
  LogOut,
  BookOpen,
  Mail,
  Phone

} from "lucide-react";
import logo from "../assets/aaiifa.jpg";
import LogoutConfirm from "./LogoutConfirm";

export default function Sidebar({ open }) {
  const navigate = useNavigate();
  const location = useLocation(); // get current route
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Memberships", icon: UserPlus, path: "/memberships" },
    { name: "Teams", icon: Layers, path: "/teams" },
    { name: "Steel Handbook", icon: BookOpen, path: "/steel-handbook" },
    { name: "Newsletter", icon: Mail, path: "/newsletter" },
    { name: "Contact", icon: Phone, path: "/contact" },
  ];

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const isSettingsActive =
    location.pathname.startsWith("/settings") ||
    location.pathname === "/web" ||
    location.pathname === "/smtp";

  // logout logic
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ derive active menu dynamically
  const getActiveName = (path) => {
    const found = menuItems.find((item) => item.path === path);
    return found ? found.name : "";
  };

  const active = getActiveName(location.pathname);

  return (
    <>
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-white h-full shadow-md flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-center bg-white transition-all duration-300 ${
            open ? "py-3 px-3" : "py-2 px-2"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className={`object-contain transition-all duration-300 ${
              open ? "h-14 w-auto" : "h-8 w-8"
            }`}
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 space-y-0.5 mt-2">
          {menuItems.map(({ name, icon: Icon, path }) => {
            const isActive = active === name;
            return (
              <NavLink
                key={name}
                to={path}
                onClick={() => setSettingsOpen(false)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-[#AD0000] text-white"
                    : "text-gray-700 hover:bg-red-50"
                }`}
              >
                <Icon size={20} />
                {open && <span className="font-medium">{name}</span>}
              </NavLink>
            );
          })}

         {/* Settings Dropdown */}
          <div className="mt-0.5">
            <button
              onClick={handleSettingsClick}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
                isSettingsActive
                  ? "bg-[#AD0000] text-white"
                  : "text-gray-700 hover:bg-red-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings size={20} />
                {open && <span className="font-medium">Settings</span>}
              </div>
              {open &&
                (settingsOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                ))}
            </button>

            {settingsOpen && open && (
              <div className="ml-10 mt-1 space-y-1">
                
                {/* Web Settings */}
                <button
                  onClick={() => navigate("/settings")}
                  className={`flex items-center mt-2 gap-2 w-full px-2 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    location.pathname === "/settings"
                      ? "bg-[#AD0000]/10 text-[#AD0000]"
                      : "text-gray-700 hover:bg-red-50"
                  }`}
                >
                  <Globe size={16} />
                  Web Settings
                </button>

                {/* Team Categories */}
                <button
                  onClick={() => navigate("/team-categories")}
                  className={`flex items-center gap-2 w-full px-2 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    location.pathname === "/team-categories"
                      ? "bg-[#AD0000]/10 text-[#AD0000]"
                      : "text-gray-700 hover:bg-red-50"
                  }`}
                >
                  <Layers size={16} />
                   Categories
                </button>

              </div>
            )}
          </div>

        </nav>

        {/* Logout */}
        <div className="mt-auto px-3 py-3">
          {open ? (
            <button
              onClick={() => setShowLogout(true)}
              className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium text-white bg-[#AD0000] hover:bg-red-700 transition-all duration-200"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogout(true)}
              className="flex items-center justify-center w-full p-2 rounded-md text-[#AD0000] hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      </aside>

      {showLogout && (
        <LogoutConfirm
          onConfirm={() => {
            handleLogout();
            setShowLogout(false);
          }}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
}
