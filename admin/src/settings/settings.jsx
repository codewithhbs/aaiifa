import React, { useState, useEffect } from "react";
import { Globe, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import api from "../api/axios"; 
import WebSettingsForm from "../components/WebSettingsForm";
import SMTPSettingsForm from "../components/SMTPSettingsForm";
  import toast from "react-hot-toast";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Web");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch settings data when tab changes
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const endpoint = activeTab === "Web" ? "/settings/web" : "/settings/smtp";
        const { data } = await api.get(endpoint);

        if (data.success && data.settings) {
          setFormData(data.settings);
        } else {
          setFormData({});
        }
      } catch (error) {
        console.error("Fetch settings failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [activeTab]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle submit
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const endpoint = activeTab === "Web" ? "/settings/web" : "/settings/smtp";

    const { data } = await api.post(endpoint, formData);

    if (data.success) {
      toast.success(`${activeTab} Updated Successfully!`);
    } else {
      toast.error(`Failed to update ${activeTab} settings`);
    }
  } catch (error) {
    console.error(`${activeTab} Save Error:`, error);
    toast.error(`Error updating ${activeTab} settings`);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex h-screen bg-gray-50">
      <Helmet>
        <title>Settings | Dashboard</title>
      </Helmet>

      {/* Sidebar */}
      <div className="w-60 bg-white shadow-md rounded-lg m-6 p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>

        <button
          onClick={() => setActiveTab("Web")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
            activeTab === "Web"
              ? "bg-[#AD0000] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Globe size={16} />
          Web
        </button>

        <button
          onClick={() => setActiveTab("SMTP")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
            activeTab === "SMTP"
              ? "bg-[#AD0000] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Mail size={16} />
          SMTP
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 m-6 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading {activeTab} Settings...
          </div>
        ) : activeTab === "Web" ? (
          <WebSettingsForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <SMTPSettingsForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
