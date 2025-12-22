import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen  } from "lucide-react";

export default function AddBlog() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        category: "",
        author: "",
        shortContent: "",
        fullContent: "",
        tags: "",
        image: null,
        imageAlt: "",
        metaTitle: "",
        canonicalUrl: "",
        metaDescription: "",
        metaKeywords: "",
        ogTitle: "",
        ogDescription: "",
        visibility: {
            index: true,
            follow: true,
            active: true,
        },
    });

    const handleChange = (e) => {
        const { name, value, files, checked } = e.target;
        if (name === "index" || name === "follow" || name === "active") {
            setFormData(prev => ({
                ...prev,
                visibility: { ...prev.visibility, [name]: checked },
            }));
        } else if (files) {
            setFormData(prev => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Blog Data:", formData);
        navigate("/blogs");
    };

    return (
        <div className="p-6">

<div className="mb-4 bg-[#AD0000] rounded-lg p-4 shadow-sm">
  <div className="flex items-center gap-3">
    <BookOpen  className="w-6 h-6 text-white" />
    <h1 className="text-2xl font-bold text-white">New Blog</h1>
  </div>
  <p className="text-white text-sm mt-2">
    Fill in the details below to create a new blog post
  </p>
</div>





            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Blog Details Section */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Blog Title"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                placeholder="blog-title-slug"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Posted By</label>
                            <input
                                type="text"
                                name="author"
                                placeholder="Author Name"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-medium text-gray-600">Short Content</label>
                            <textarea
                                name="shortContent"
                                placeholder="Short Content"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-medium text-gray-600">Full Content</label>
                            <textarea
                                name="fullContent"
                                placeholder="Full Content"
                                rows={6}
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-medium text-gray-600">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                placeholder="tag1, tag2, tag3"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">Featured Image</h2>
                    <div className="flex items-center gap-6">

                        {/* Upload Button */}
                        <label className="flex flex-col items-center justify-center w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-500 hover:bg-gray-50 transition">
                            <span className="text-gray-500 text-sm text-center">Click or Drag to Upload</span>
                            <input type="file" name="image" className="hidden" onChange={handleChange} />
                        </label>

                        {/* Image Preview */}
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-md border border-gray-300"
                            />
                        )}

                        {/* Alt Text */}
                        <div className="flex flex-col flex-1">
                            <label className="mb-2 font-medium text-gray-600">Image Alt Text</label>
                            <input
                                type="text"
                                name="imageAlt"
                                placeholder="Alt Text for Image"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </div>

                {/* SEO / Meta Section */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">SEO / Meta Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Meta Title</label>
                            <input
                                type="text"
                                name="metaTitle"
                                placeholder="Meta Title"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Canonical URL</label>
                            <input
                                type="text"
                                name="canonicalUrl"
                                placeholder="https://example.com/blog-slug"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-medium text-gray-600">Meta Description</label>
                            <textarea
                                name="metaDescription"
                                placeholder="Meta Description"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">Meta Keywords</label>
                            <input
                                type="text"
                                name="metaKeywords"
                                placeholder="keyword1, keyword2"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium text-gray-600">OG Title</label>
                            <input
                                type="text"
                                name="ogTitle"
                                placeholder="Open Graph Title"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-medium text-gray-600">OG Description</label>
                            <textarea
                                name="ogDescription"
                                placeholder="Open Graph Description"
                                className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Visibility & Status Section */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">Visibility & Status</h2>
                    <div className="flex flex-wrap gap-6">

                        {/* Index Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                name="index"
                                checked={formData.visibility.index}
                                onChange={handleChange}
                                className="sr-only peer"
                            />
                            <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                            <span className="ml-3 text-gray-700 select-none">Index</span>
                        </label>

                        {/* Follow Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                name="follow"
                                checked={formData.visibility.follow}
                                onChange={handleChange}
                                className="sr-only peer"
                            />
                            <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                            <span className="ml-3 text-gray-700 select-none">Follow</span>
                        </label>

                        {/* Active Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                name="active"
                                checked={formData.visibility.active}
                                onChange={handleChange}
                                className="sr-only peer"
                            />
                            <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                            <span className="ml-3 text-gray-700 select-none">Active</span>
                        </label>

                    </div>
                </div>


                {/* Submit Button */}
                <div className="flex justify-end gap-3 mt-4">
                    {/* Cancel Button */}
                    <button
                        type="button"
                        onClick={() => navigate("/blogs")}
                        className="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-400 transition duration-300"
                    >
                        Cancel
                    </button>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#AD0000] text-white text-sm font-medium rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Submit
                    </button>
                </div>



            </form>
        </div>
    );
}
