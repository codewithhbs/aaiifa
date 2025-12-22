import React from "react";
import { Globe, Mail, Send, User, Lock } from "lucide-react";

export default function SMTPSettingsForm({ formData, handleChange, handleSubmit }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">SMTP Settings</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                {/* SMTP Host */}
                <div className="flex flex-col col-span-2">
                    <label className="mb-1 font-medium text-gray-700">SMTP Host</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Globe size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="smtpHost"
                            value={formData.smtpHost || ""}
                            onChange={handleChange}
                            placeholder="smtp.example.com"
                            className="w-full outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Port */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">SMTP Port</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Mail size={20} className="text-gray-400" />
                        <input
                            type="number"
                            name="smtpPort"
                            value={formData.smtpPort || ""}
                            onChange={handleChange}
                            placeholder="587"
                            className="w-full outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Username */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">SMTP Username</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Mail size={20} className="text-gray-400" />
                        <input
                            type="email"
                            name="smtpUsername"
                            value={formData.smtpUsername || ""}
                            onChange={handleChange}
                            placeholder="username@example.com"
                            className="w-full outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">SMTP Password</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Send size={20} className="text-gray-400" />
                        <input
                            type="password"
                            name="smtpPassword"
                            value={formData.smtpPassword || ""}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full outline-none"
                            required
                        />
                    </div>
                </div>

                {/* From Name */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">From Name</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <User size={20} className="text-gray-400" />
                        <input
                            type="text"
                            name="smtpFromName"
                            value={formData.smtpFromName || ""}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* From Email */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">From Email</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Mail size={20} className="text-gray-400" />
                        <input
                            type="email"
                            name="smtpFromEmail"
                            value={formData.smtpFromEmail || ""}
                            onChange={handleChange}
                            placeholder="from@example.com"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* Encryption */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Encryption</label>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 shadow-sm">
                        <Lock size={20} className="text-gray-400" />
                        <select
                            name="smtpEncryption"
                            value={formData.smtpEncryption || ""}
                            onChange={handleChange}
                            className="w-full outline-none bg-transparent"
                        >
                            <option value="">Select Encryption</option>
                            <option value="ssl">SSL</option>
                            <option value="tls">TLS</option>
                        </select>
                    </div>
                </div>

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
