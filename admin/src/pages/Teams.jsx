import React, { useState, useEffect } from "react";
import { Edit2, Trash2, Search } from "lucide-react";
import TeamModal from "../components/TeamModal";
import ConfirmDialog from "../components/DeleteConfirmDialog";
import api from "../api/axios";
import toast from "react-hot-toast";
import defaultImage from "../assets/profile.jpg"
import { Helmet } from "react-helmet-async";


export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/team-categories");
        if (res.data?.success) {
          setCategories(res.data.data || []);
        }
      } catch (err) {
        console.error("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);


  // Fetch Teams
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await api.get("/teams");

        if (res.data.success) {
          setTeams(res.data.data || []);
        }

      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  const filteredTeams = (teams || []).filter((team) => {
    const matchCategory =
      !selectedCategory || team.category?._id === selectedCategory;

    const matchSearch =
      !searchTerm ||
      team.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.company?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredTeams.length / perPage);

  const paginatedTeams = filteredTeams.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );



  // Confirmation before delete
  const handleDeleteClick = (id) => {
    setSelectedTeamId(id);
    setConfirmOpen(true);
  };

  // Perform delete
  const confirmDelete = async () => {
    try {
      await api.delete(`/teams/${selectedTeamId}`);
      setTeams((prev) => prev.filter((t) => t._id !== selectedTeamId));

      toast.success("Team member deleted successfully!");
    } catch (error) {
      console.error("Failed to delete team:", error);
      toast.error("Failed to delete team member");
    } finally {
      setConfirmOpen(false);
      setSelectedTeamId(null);
    }
  };

  const handleAddNew = () => {
    setEditingTeam(null);
    setIsModalOpen(true);
  };

  const handleEdit = (team) => {
    setEditingTeam(team);
    setIsModalOpen(true);
  };


  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-80 space-y-4">
        <div className="w-12 h-12 border-4 border-[#AD0000]/30 border-t-[#AD0000] rounded-full animate-spin"></div>
        <p className="text-gray-700 font-medium text-lg animate-pulse">
          Loading...
        </p>
      </div>
    );


  return (
    <div className="p-6">
      <Helmet>
        <title>Teams | Dashboard</title>
      </Helmet>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Teams</h1>
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-6">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Category Filter */}
    <div className="relative w-full md:w-64">
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 text-sm focus:ring-2 focus:ring-[#AD0000]/40 focus:border-[#AD0000] outline-none"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Dropdown Icon */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        ▼
      </span>
    </div>

    {/* Search Input */}
    <div className="relative w-full md:w-72">
      <input
        type="text"
        placeholder="Search by name or company"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-gray-700 text-sm focus:ring-2 focus:ring-[#AD0000]/40 focus:border-[#AD0000] outline-none"
      />

     {/* Search Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={18} />
      </span>
    </div>

  </div>
</div>


      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-700">All Teams</h2>
          <button
            onClick={handleAddNew}
            className="bg-[#AD0000] hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            + New Member
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                <th className="px-4 py-3 rounded-tl-lg font-medium">S.No</th>
                <th className="px-4 py-3 font-medium">Profile</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Designation</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 rounded-tr-lg font-medium text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedTeams.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">
                    No team members found
                  </td>
                </tr>
              ) : (
                paginatedTeams.map((team, index) => (
                  <tr
                    key={team._id}
                    className={`text-gray-700 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                  >
                    <td className="px-4 py-3">
                      {(currentPage - 1) * perPage + index + 1}
                    </td>

                    <td className="px-4 py-3">
                      <img
                        src={team.image?.url || defaultImage}
                        alt={team.image?.alt || team.name || "Team member"}
                        className="w-20 h-20 rounded-lg object-cover border border-gray-200 shadow-sm"
                        loading="lazy"
                      />
                    </td>

                    <td className="px-4 py-3">{team.name}</td>
                    <td className="px-4 py-3">{team.company}</td>
                    <td className="px-4 py-3">{team.designation}</td>
                    <td className="px-4 py-3">{team.category?.name || "—"}</td>

                    <td className="px-4 py-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={team.status}
                          onChange={() =>
                            setTeams((prev) =>
                              prev.map((t) =>
                                t._id === team._id ? { ...t, status: !t.status } : t
                              )
                            )
                          }
                          className="sr-only peer"
                        />
                        <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition"></div>
                      </label>
                    </td>

                    <td className="px-4 py-3 text-center flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(team)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
                      >
                        <Edit2 size={15} />
                      </button>

                      <button
                        onClick={() => handleDeleteClick(team._id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>


          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-end mt-4 gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${currentPage === index + 1
                    ? "bg-[#AD0000] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

      </div>

      {/* Modals */}
      {isModalOpen && (
        <TeamModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          team={editingTeam}
          onSuccess={(savedTeam) => {
            if (!savedTeam || !savedTeam._id) {
              console.error("Invalid saved team:", savedTeam);
              return;
            }
            setTeams((prev) => {
              if (editingTeam) {
                return prev.map((t) =>
                  t && t._id === savedTeam._id ? savedTeam : t
                );
              }
              return [...prev.filter(Boolean), savedTeam];
            });

            setEditingTeam(null);
            setIsModalOpen(false);
          }}

        />
      )}


      <ConfirmDialog
        isOpen={confirmOpen}
        title="Delete Confirmation"
        message="Are you sure you want to delete this team member? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}
