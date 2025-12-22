    import React, { useState, useEffect } from "react";
    import { X, User, Briefcase, Award, Image as ImageIcon } from "lucide-react";
    import toast from "react-hot-toast";
    import api from "../api/axios";

    export default function TeamModal({ isOpen, onClose, team, onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        designation: "",
        category: "",
        bio: "", 
        status: false,
        image: "",
         order: 0, 
    });

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await api.get("/team-categories");
      if (res.data?.success) {
        setCategories(res.data.data || []);
      }
    } catch (err) {
      console.error("Failed to load categories");
    }
  };

  fetchCategories();
}, []);


    // Prefill when editing
    useEffect(() => {
  if (team) {
    setFormData({
      name: team.name || "",
      company: team.company || "",
      designation: team.designation || "",
      category: team.category?._id || "", 
      bio: team.bio || "",  
      status: team.status || false,
      image: team.image?.url || "",
      order: team.order ?? 0,
    });
  } else {
    setFormData({
      name: "",
      company: "",
      designation: "",
      category: "",
       bio: "",   
      status: false,
      image: "",
       order: 0, 
    });
  }
}, [team]);


    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
        setFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (type === "file") {
        const file = files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
        } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        setLoading(true);

        try {
        let response;

        if (team?._id) {
            response = await api.put(`/teams/${team._id}`, formData);
            toast.success("Team updated successfully!");
        } else {
            response = await api.post("/teams", formData);
            toast.success("Team added successfully!");
        }
        onSuccess(response.data.team);
        onClose();
        } catch (error) {
        console.error("Team save error:", error);
        toast.error("Failed to save team. Please try again.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black/40"></div>

        <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-lg shadow-2xl w-full max-w-md md:max-w-xl lg:max-w-2xl z-10 animate-fadeIn overflow-hidden"

        >
            {/* Header */}
            <div className="w-full bg-[#AD0000] text-white rounded-t-lg px-6 py-4 flex items-center justify-between shadow-md">
            <h2 className="text-xl font-bold">
                {team ? "Edit Team" : "New Team"}
            </h2>
            <button onClick={onClose} type="button" className="text-white hover:text-gray-200">
                <X size={22} />
            </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">

                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-700 bg-transparent"
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                        ))}
                    </select>
                    </div>

                    <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                        <span className="text-sm text-gray-500 font-medium">Order</span>
                        <input
                            type="number"
                            name="order"
                            value={formData.order}
                            onChange={handleChange}
                            min={0}
                            placeholder="Display order"
                            className="w-full outline-none text-gray-700 bg-transparent"
                        />
                        </div>


            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                <User size={20} className="text-gray-400" />
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full outline-none text-gray-700"
                required
                />
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                <Briefcase size={20} className="text-gray-400" />
                <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full outline-none text-gray-700"
                required
                />
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                <Award size={20} className="text-gray-400" />
                <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full outline-none text-gray-700"
                required
                />
            </div>

            <div className="flex flex-col items-center gap-3 mt-4">
                {formData.image && (
                <div className="w-28 h-28 rounded-lg overflow-hidden border-2 border-gray-300 shadow-md">
                    <img
                    src={formData.image}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                    />
                </div>
                )}
                <label className="cursor-pointer flex items-center gap-2 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-all shadow-sm">
                <ImageIcon size={20} className="text-gray-500" />
                {formData.image ? "Change Image" : "Upload Image"}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleChange}
                />
                </label>
            </div>


            <div className="border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-1 focus-within:ring-red-500">
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Short Bio / Description"
                    rows={3}
                    className="w-full outline-none text-gray-700 resize-none"
                                />
                </div>

            <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-700 font-medium">Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="status"
                    checked={formData.status}
                    onChange={handleChange}
                    className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
                <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                Cancel
                </button>
                <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 rounded-lg bg-[#AD0000] text-white font-semibold hover:bg-red-700 transition flex items-center gap-2"
                >
                {loading ? "Saving..." : team ? "Update" : "Submit"}
                </button>
            </div>
            </div>
        </form>
        </div>
    );
    }
