import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import logo from "../assets/aaiifa.jpg";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const { data } = await api.post("/auth/login", { email, password });

    // Store token & user info
    localStorage.setItem("auth", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    toast.success(`Welcome, ${data?.user?.name || "Aaiifa"}!`);
    navigate("/");
  } catch (error) {
    const message = error.response?.data?.message || "Login failed";
    toast.error(message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200">
        {/* Logo */}
        <div className="text-center mb-6 flex flex-col items-center justify-center">
          <Link to="/" className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="object-contain h-20 w-auto mb-3" // slightly larger
            />
          </Link>
          <p className="mt-2 text-gray-700 font-medium">
            Enter your credentials to login
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-[#040807] focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-[#040807] focus:outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#040807] text-white font-semibold rounded-xl shadow-lg hover:bg-black transition-all disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
