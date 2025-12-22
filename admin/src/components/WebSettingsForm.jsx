import React from "react";
import { Globe, Phone, MessageCircle, Mail, MapPin, Image as ImageIcon, Facebook, Instagram, Youtube, Linkedin, Twitter, Send } from "lucide-react";

export default function WebSettingsForm({ formData, handleChange, handleSubmit }) {
    const socialMedia = [
        { name: "facebook", icon: <Facebook size={20} className="text-blue-600" />, placeholder: "Facebook" },
        { name: "instagram", icon: <Instagram size={20} className="text-pink-500" />, placeholder: "Instagram" },
        { name: "youtube", icon: <Youtube size={20} className="text-red-600" />, placeholder: "YouTube" },
        { name: "linkedin", icon: <Linkedin size={20} className="text-blue-700" />, placeholder: "LinkedIn" },
        { name: "twitter", icon: <Twitter size={20} className="text-blue-400" />, placeholder: "Twitter" },
        { name: "telegram", icon: <Send size={20} className="text-blue-500" />, placeholder: "Telegram" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Web Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                {/* Website Name */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Website Name</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Globe size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Website Name"
                            className="w-full outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Phone</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Phone size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">WhatsApp</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <MessageCircle size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="WhatsApp"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Email</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Mail size={20} className="text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="flex flex-col col-span-2">
                    <label className="mb-1 font-medium text-gray-700">Address</label>
                    <div className="flex items-start gap-2 rounded-md px-3 py-2 shadow-sm">
                        <MapPin size={20} className="text-gray-400 mt-1" />
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full outline-none resize-none h-24"
                        />
                    </div>
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-2 col-span-2">
                    <label className="mb-1 font-medium text-gray-700">Website Image</label>

                    <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                        <ImageIcon size={20} className="text-gray-500" />
                        {formData.image ? "Change Image" : "Upload Image"}
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="hidden"
                            onChange={handleChange}
                        />
                    </label>

                    {/* Show preview correctly for both base64 and cloudinary URL */}
                    {formData.image && (
                        <img
                            src={
                                typeof formData.image === "string"
                                    ? formData.image
                                    : formData.image.url
                            }
                            alt={formData.image?.alt || "Preview"}
                            className="w-full max-w-sm h-auto object-contain rounded-md border border-gray-200 bg-gray-50 p-2"
                        />
                    )}

                </div>


                {/* Google Maps */}
                <div className="flex flex-col col-span-2">
                    <label className="mb-1 font-medium text-gray-700">Google Maps URL</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <MapPin size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="googleMaps"
                            value={formData.googleMaps}
                            onChange={handleChange}
                            placeholder="Google Maps URL"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Social Media */}
                {socialMedia.map((social) => (
                    <div key={social.name} className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">{social.placeholder}</label>
                        <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                            {social.icon}
                            <input
                                type="text"
                                name={social.name}
                                value={formData[social.name]}
                                onChange={handleChange}
                                placeholder={social.placeholder}
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                ))}

                {/* Submit */}
                <div className="col-span-2 flex justify-end mt-6">
                    <button className="px-6 py-2 bg-[#AD0000] text-white rounded-md font-semibold hover:bg-red-700 transition">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}
