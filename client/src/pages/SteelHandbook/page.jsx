import React, { useState } from "react";
import "./director.css";
import ImgDirectory from "./handbook.jpg";

const SteelHandbook = () => {
  const defaultFormState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormState);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/steel-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "Thank you for your inquiry! Our team will contact you shortly."
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);

        setFormData(defaultFormState);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit message.");
    }
  };

  return (
    <section className="directory-query-section">
      <div className="directory-query-container">
        {/* Left: Query Form */}
        <div className="directory-form">
          <h2 className="query-title">Book Your Copy</h2>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <form className="query-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="full-width"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="full-width"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
           {successMessage && <div className="success-toast">{successMessage}</div>}
        </div>

        {/* Right: Handbook Info */}
        <div className="directory-info">
          <div className="info-card">
            <img src={ImgDirectory} alt="Steel Handbook" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelHandbook;
