import React, { useEffect, useState } from "react";
import { Users, Layers, FileText, Star, Award, Heart } from "lucide-react";
import api from "../api/axios";

export default function Dashboard() {
  const [counts, setCounts] = useState({
    memberships: 0,
    teams: 0,
    steelHandbook: 0,
    newsletter: 0,
    contact: 0,
    categories: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
       const res = await api.get("/dashboard/stats");
       if (res.data?.success) {
  setCounts(res.data.data); 
}
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      title: "Memberships",
      value: counts.memberships,
      icon: <Users className="h-10 w-10 text-white" />,
      gradient: "from-[#234686] to-blue-500",
    },
    {
      title: "Teams",
      value: counts.teams,
      icon: <Layers className="h-10 w-10 text-white" />,
      gradient: "from-[#1C448E] to-blue-500",
    },
    {
      title: "Steel Handbook",
      value: counts.steelHandbook,
      icon: <FileText className="h-10 w-10 text-white" />,
      gradient: "from-[#234686] to-blue-500",
    },
    {
      title: "Newsletter",
      value: counts.newsletter,
      icon: <FileText className="h-10 w-10 text-white" />,
      gradient: "from-[#234686] to-blue-500",
    },
    {
      title: "Contact",
      value: counts.contact,
      icon: <FileText className="h-10 w-10 text-white" />,
      gradient: "from-[#234686] to-blue-500",
    },
    {
      title: "Categories",
      value: counts.categories,
      icon: <FileText className="h-10 w-10 text-white" />,
      gradient: "from-[#234686] to-blue-500",
    },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="mb-8 p-6 bg-gradient-to-r from-[#8B0000] via-[#D12D2D] to-[#FF6B6B] rounded-3xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
        <div>
          <h1 className="text-3xl font-extrabold">
            Good to see you, AIIFA 
          </h1>
          <p className="text-white/90 mt-1 text-lg">
            {today} • Here’s what’s happening today
          </p>
        </div>

        <div className="flex gap-4 mt-5 sm:mt-0">
          <button className="bg-gradient-to-tr from-[#0052CC] to-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transition">
            <Star size={28} className="text-white" />
          </button>
          <button className="bg-gradient-to-tr from-[#16A34A] to-emerald-500 p-4 rounded-full shadow-lg hover:scale-110 transition">
            <Award size={28} className="text-white" />
          </button>
          <button className="bg-gradient-to-tr from-sky-400 to-indigo-500 p-4 rounded-full shadow-lg hover:scale-110 transition">
            <Heart size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`relative bg-gradient-to-r ${item.gradient} p-6 rounded-2xl shadow-xl text-white hover:scale-105 transition`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg opacity-90">{item.title}</p>
                <h3 className="text-4xl font-extrabold mt-2">
                  {loading ? "—" : item.value}
                </h3>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
