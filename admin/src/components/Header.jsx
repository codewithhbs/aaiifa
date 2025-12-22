import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoutConfirm from "./LogoutConfirm";

export default function Header({ open, setOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user")) || { name: "AIIFA" };

  return (
    <header className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left Section — Logo + Toggle */}
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        {/* <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <Menu size={22} className="text-gray-600" />
        </button> */}
      </div>

      {/* Right Section — Profile */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 focus:outline-none hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200"
        >
          {/* Avatar Circle */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#AD0000] text-white font-semibold">
            {user.name?.[0]?.toUpperCase() || "A"}
          </div>

          {/* User Info */}
          <div className="hidden sm:block text-left">
            <p className="text-xs text-gray-500 leading-tight">Welcome</p>
            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
          </div>

          {/* Dropdown Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
            {/* <button
              className="block w-full text-left px-4 py-2 text-sm font-medium text-dark hover:bg-red-50 transition-all duration-200"
              onClick={() => alert("Go to Profile")}
            >
              Profile
            </button> */}
            <button
              className="block w-full text-left px-4 py-2 text-sm font-medium text-dark hover:bg-red-50 transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setShowLogout(true);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogout && (
        <LogoutConfirm
          onConfirm={() => {
            handleLogout();
            setShowLogout(false);
          }}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </header>
  );
}
