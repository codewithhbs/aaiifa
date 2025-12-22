import React from "react";
import { AlertTriangle, X } from "lucide-react";

export default function DeleteConfirmDialog({
  isOpen,
  title = "Confirm Delete",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative animate-fadeIn">
        
        {/* Close Icon */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        {/* Warning Icon */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="bg-red-100 p-3 rounded-full mb-3">
            <AlertTriangle className="text-[#AD0000]" size={36} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{message}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-[#AD0000] text-white hover:bg-red-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>  
    </div>
  );
}
