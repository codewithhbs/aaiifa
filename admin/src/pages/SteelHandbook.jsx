import React, { useState, useEffect } from "react";
import { Trash2, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ConfirmDialog from "../components/DeleteConfirmDialog";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function Registrations() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [registrations, setRegistrations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMembership, setSelectedMembership] = useState(null);

  const itemsPerPage = 10;

  // ================= Fetch Steel Handbook Queries =================
  useEffect(() => {
    const fetchSteelQueries = async () => {
      try {
        const response = await api.get("/steel-query");

        if (response.data?.success) {
          setRegistrations(response.data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch steel queries:", error);
      }
    };

    fetchSteelQueries();
  }, []);

  // ================= Pagination =================
  const totalPages = Math.ceil((registrations?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = Array.isArray(registrations)
    ? registrations.slice(startIndex, startIndex + itemsPerPage)
    : [];

  // ================= Delete =================
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await api.delete(`/steel-query/${deleteId}`);

      setRegistrations((prev) =>
        prev.filter((reg) => reg._id !== deleteId)
      );

      toast.success("Steel handbook query deleted successfully!");

      setConfirmOpen(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Failed to delete query:", error);
      toast.error("Failed to delete query");
    }
  };

  return (
    <div className="p-6">
      <Helmet>
        <title>Steel Handbook | Dashboard</title>
      </Helmet>

      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Steel Handbook
      </h1>

      {/* ================= Table ================= */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-700">
            All Steel Handbook Queries
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                <th className="px-4 py-3 rounded-tl-lg font-medium">S.No</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 rounded-tr-lg font-medium text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((reg, index) => (
                <tr
                  key={reg._id}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>

                  <td className="px-4 py-3 font-medium">
                    {reg.firstName} {reg.lastName}
                  </td>

                  <td className="px-4 py-3">{reg.phone}</td>

                  <td className="px-4 py-3">{reg.email}</td>

                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedMembership(reg)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mr-2"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(reg._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Pagination ================= */}
        {registrations.length > itemsPerPage && (
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
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* ================= View Modal ================= */}
      {selectedMembership && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">
                Steel Handbook Query Details
              </h3>

              <button
                onClick={() => setSelectedMembership(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-6 space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-xl p-4">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Name
                  </p>
                  <p className="font-semibold">
                    {selectedMembership.firstName}{" "}
                    {selectedMembership.lastName}
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Phone
                  </p>
                  <p className="font-semibold">
                    {selectedMembership.phone}
                  </p>
                </div>

                <div className="border rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Email
                  </p>
                  <p className="font-semibold break-all">
                    {selectedMembership.email}
                  </p>
                </div>

                <div className="border rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Address
                  </p>
                  <p className="font-semibold">
                    {selectedMembership.address}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Message
                </p>
                <div className="bg-gray-50 border border-dashed rounded-xl p-4 min-h-[90px]">
                  {selectedMembership.message ||
                    "No message provided."}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= Delete Confirmation ================= */}
      <ConfirmDialog
        isOpen={confirmOpen}
        title="Delete Steel Handbook Query"
        message="Are you sure you want to delete this query? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => {
          setConfirmOpen(false);
          setDeleteId(null);
        }}
      />
    </div>
  );
}
