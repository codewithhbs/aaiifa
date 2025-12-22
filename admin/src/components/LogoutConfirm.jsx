import React from "react";
import { Power } from "lucide-react";

export default function LogoutConfirm({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-80 p-6 text-center transform transition-all duration-300 scale-100 opacity-100">
        {/* Logout Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-red-100 rounded-full">
            <Power className="text-[#AD0000] h-10 w-10" />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Confirm Logout
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to log out? You’ll be redirected to the login page.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-[#AD0000] text-white hover:bg-red-700 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
