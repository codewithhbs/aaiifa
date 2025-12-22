"use client";
import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
    const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
     setSuccessMessage("Your inquiry has been successfully submitted.");

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Failed to submit message.");
  }
};




  return (
    <section className="contact-section ">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-header">
              <h1 className="contact-title">Contact Us</h1>
              {/* <div className="title-underline"></div> */}
            </div>

            <div className="contact-item">
              <div className="contact-icon address-icon">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-subtitle">Address</h3>
                <p>
                  504, Pearls Omaxe, Tower- I Netaji Subhash Place, Pitampura
                  New Delhi-110034
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon email-icon">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-subtitle">E-mail Address</h3>
                <a
                  href="mailto:aaiifa6@gmail.com" className="text-dark"> aaiifa6@gmail.com</a>
                ,
                <a href="mailto:aiifa.steelex@aaiifa.org" className="text-dark pl-2">
                  aiifa.steelex@aaiifa.org
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-subtitle">Phone Number</h3>
                <a href="tel:+9188040085" className="phone-link">
                  +91 9810410186
                </a>
                <a href="tel:+9188040085" className="phone-link">
                  +91 9810410815
                </a>
                <a href="tel:01142725051" className="phone-link">
                  011-42725051
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="form-title" style={{textDecoration: "none"}}>Send Your Views / Suggestions</h2>
            <p className="form-subtitle">
              We'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                required
                rows={2}
              ></textarea>

              <button type="submit" className="submit-button">
                Submit Message
              </button>
              <p className="form-disclaimer">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
              {successMessage && <div className="success-toast">{successMessage}</div>}
          </div>
        </div>
      </div>

{/* Map & Image Section */}
      <div className="location-section">
        <div className="location-container">
          <div className="location-grid">
            <div className="location-col map-col">
              <div className="map-wrapper">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6999.932645477202!2d77.15178!3d28.690654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0234641aaaab%3A0xdb7dd47463729a2a!2sAIIFA%20Sustainable%20Steel%20Manufacturers%20Association!5e0!3m2!1sen!2sin!4v1762417646926!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="location-col image-col">
              <div className="image-wrapper">
                <img
                  src="/media/about/about1.jpg"
                  alt="AIIFA Office Building"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <h3>Visit Our Office</h3>
                  <p>We're here to help you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
