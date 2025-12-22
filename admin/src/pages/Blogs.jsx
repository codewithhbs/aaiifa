import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Tips", category: "Web Development", status: true, author: "Rahul Sharma", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 2, title: "Next.js Guide", category: "Web Development", status: false, author: "Priya Mehta", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 3, title: "Tailwind Tricks", category: "CSS", status: true, author: "Aman Gupta", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 4, title: "React Query", category: "Web Development", status: true, author: "Neha Singh", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 5, title: "JavaScript Tips", category: "Programming", status: false, author: "Vikram Jain", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 6, title: "Node.js Basics", category: "Backend", status: true, author: "Sana Kapoor", image: "https://randomuser.me/api/portraits/women/10.jpg" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(blogs.length / perPage);
  const paginatedBlogs = blogs.slice((currentPage - 1) * perPage, currentPage * perPage);

  const toggleStatus = (id) => {
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, status: !b.status } : b));
  };

  return (
    <div className="p-6">
        <Helmet>
                    <title>Blogs | Dashboard</title>
                  </Helmet>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Blogs</h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-700">All Blogs</h2>
          <button
            onClick={() => navigate("/blogs/new")}
            className="bg-[#AD0000] hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            + New Blog
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                <th className="px-4 py-3 rounded-tl-lg font-medium">S.No</th>
                <th className="px-4 py-3 font-medium">Image</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Posted By</th>
                <th className="px-4 py-3 rounded-tr-lg font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBlogs.map((blog, index) => (
                <tr key={blog.id} className={`text-gray-700 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="px-4 py-3">{(currentPage - 1) * perPage + index + 1}</td>
                  <td className="px-4 py-3">
                    <img src={blog.image} alt={blog.title} className="w-10 h-10 rounded-md object-cover" />
                  </td>
                  <td className="px-4 py-3">{blog.title}</td>
                  <td className="px-4 py-3">{blog.category}</td>
                  <td className="px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={blog.status}
                        onChange={() => toggleStatus(blog.id)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3">{blog.author}</td>
                  <td className="px-4 py-3 text-center flex justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
                      <Edit2 size={15} />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md">
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end mt-4 gap-2">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50">Prev</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-3 py-1 rounded-md text-sm font-medium ${currentPage === index + 1 ? "bg-[#AD0000] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>{index + 1}</button>
          ))}
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
