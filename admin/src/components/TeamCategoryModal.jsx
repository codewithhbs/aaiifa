import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function TeamCategoryModal({
  isOpen,
  onClose,
  category,
  onSuccess,
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setName(category.name || "");
    } else {
      setName("");
    }
  }, [category]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;

      if (category?._id) {
        res = await api.put(`/team-categories/${category._id}`, { name });
        toast.success("Category updated successfully");
      } else {
        res = await api.post("/team-categories", { name });
        toast.success("Category created successfully");
      }
      
      onSuccess(res.data.data);
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to save category");
    } finally {
      setLoading(false);
    }
  };    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fadeIn"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {category ? "Edit Category" : "Add Category"}
          </h2>
          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            placeholder="Enter category name"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-[#AD0000] text-white rounded-lg hover:bg-red-700"
          >
            {loading ? "Saving..." : category ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
