  import React, { useState, useEffect } from "react";
  import { Trash2, Download  } from "lucide-react";
  import { Helmet } from "react-helmet-async";
  import ConfirmDialog from "../components/DeleteConfirmDialog";
  import toast from "react-hot-toast";
  import api from "../api/axios";

  export default function Newsletter() {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [subscribers, setSubscribers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    // ================= FETCH NEWSLETTER SUBSCRIBERS =================
    useEffect(() => {
      const fetchSubscribers = async () => {
        try {
          const response = await api.get("/newsletter");

          if (response.data?.success) {
            setSubscribers(response.data.data || []);
          }
        } catch (error) {
          console.error("Failed to fetch subscribers:", error);
        }
      };

      fetchSubscribers();
    }, []);

    // ================= PAGINATION =================
    const totalPages = Math.ceil((subscribers.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentData = subscribers.slice(
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
        await api.delete(`/newsletter/${deleteId}`);

        setSubscribers((prev) =>
          prev.filter((item) => item._id !== deleteId)
        );

        toast.success("Subscriber deleted successfully!");

        setConfirmOpen(false);
        setDeleteId(null);
      } catch (error) {
        console.error("Failed to delete subscriber:", error);
        toast.error("Failed to delete subscriber");
      }
    };

    const handleExportExcel = () => {
  if (!subscribers.length) {
    toast.error("No subscribers to export");
    return;
  }

  const headers = [
    "S.No",
    "Email",
    "Subscribed On",
  ];

  const rows = subscribers.map((item, index) => [
    index + 1,
    item.email || "",
    item.createdAt
      ? new Date(item.createdAt).toLocaleString()
      : "",
  ]);

  const csvContent =
    headers.join(",") +
    "\n" +
    rows
      .map(row => row.map(v => `"${v}"`).join(","))
      .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Newsletter_Subscribers_${Date.now()}.csv`;
  link.click();
};


    return (
      <div className="p-6">
        <Helmet>
          <title>Newsletter | Dashboard</title>
        </Helmet>

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Newsletter Subscribers
        </h1>

        {/* ================= TABLE ================= */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              All Subscribers
            </h2>
             <button
                onClick={handleExportExcel}
                className="bg-[#AD0000] hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Download size={16} className="stroke-[2.5]" />
                Export
              </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                  <th className="px-4 py-3 rounded-tl-lg font-medium">
                    S.No
                  </th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Subscribed On</th>
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
                      {item.email}
                    </td>

                    <td className="px-4 py-3">
                      {new Date(item.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}

                    </td>

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDeleteClick(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}

                {subscribers.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-6 text-gray-500"
                    >
                      No subscribers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ================= PAGINATION ================= */}
          {subscribers.length > itemsPerPage && (
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
          title="Delete Subscriber"
          message="Are you sure you want to delete this subscriber? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => {
            setConfirmOpen(false);
            setDeleteId(null);
          }}
        />
      </div>
    );
  }
