import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ConfirmDialog from "../components/DeleteConfirmDialog";
import TeamCategoryModal from "../components/TeamCategoryModal";
import { Plus, Edit2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function TeamCategories() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
const [editingCategory, setEditingCategory] = useState(null);


  const itemsPerPage = 10;

  // ================= FETCH TEAM CATEGORIES =================
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/team-categories");

        if (response.data?.success) {
          setCategories(response.data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // ================= PAGINATION =================
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ================= DELETE =================
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await api.delete(`/team-categories/${deleteId}`);

      setCategories((prev) =>
        prev.filter((item) => item._id !== deleteId)
      );

      toast.success("Category deleted successfully!");

      setConfirmOpen(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete category");
    }
  };

  const toggleStatus = async (id) => {
  try {
    const response = await api.put(`/team-categories/${id}/status`);

    if (response.data.success) {
      setCategories((prev) =>
        prev.map((item) =>
          item._id === id
            ? { ...item, status: response.data.status }
            : item
        )
      );

      toast.success("Status updated successfully");
    }
  } catch (error) {
    toast.error("Failed to update status");
  }
};


  return (
    <div className="p-6">
      <Helmet>
        <title>Team Categories | Dashboard</title>
      </Helmet>

      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Team Categories
      </h1>

      {/* ================= TABLE ================= */}
      <div className="bg-white shadow-md rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-700">
            All Categories
          </h2>
          <button
            onClick={() => {
              setEditingCategory(null);
              setModalOpen(true);
            }}
            className="flex items-center gap-2 bg-[#AD0000] text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <Plus size={16} />
            New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                <th className="px-4 py-3 rounded-tl-lg font-medium">
                  S.No
                </th>
                <th className="px-4 py-3 font-medium">Category Name</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">
                  Created At
                </th>
                <th className="px-4 py-3 rounded-tr-lg font-medium text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr
                  key={item._id}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>

                  <td className="px-4 py-3 font-medium">
                    {item.name}
                  </td>

                 <td className="px-4 py-3">
                    <button
                        onClick={() => toggleStatus(item._id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                        item.status ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                        <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            item.status ? "translate-x-6" : "translate-x-1"
                        }`}
                        />
                    </button>
                    </td>

                  <td className="px-4 py-3">
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>
      <td className="px-4 py-3 text-center">

                            <button
                                onClick={() => {
                                  setEditingCategory(item);
                                  setModalOpen(true);
                                }}
                                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mr-2"
                              >
                                <Edit2 size={16} />
                              </button>
            

                    <button
                      onClick={() => handleDeleteClick(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {categories.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= PAGINATION ================= */}
        {categories.length > itemsPerPage && (
          <div className="flex items-center justify-end mt-4 gap-2">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(p - 1, 1))
              }
              disabled={currentPage === 1}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  currentPage === index + 1
                    ? "bg-[#AD0000] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(p + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* ================= DELETE CONFIRM ================= */}
      <ConfirmDialog
        isOpen={confirmOpen}
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => {
          setConfirmOpen(false);
          setDeleteId(null);
        }}
        
      />

      <TeamCategoryModal
        isOpen={modalOpen}
        category={editingCategory}
        onClose={() => setModalOpen(false)}
        onSuccess={(saved) => {
          setCategories((prev) =>
            editingCategory
              ? prev.map((c) => (c._id === saved._id ? saved : c))
              : [saved, ...prev]
          );
        }}
      />

    </div>
  );
}
