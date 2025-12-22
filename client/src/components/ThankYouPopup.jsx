import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ThankYouPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("thankYouPopupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("thankYouPopupShown", "true");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="close-btn" onClick={() => setShow(false)}>
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="popup-title">Heartfelt Thanks</h2>

        {/* Paragraphs */}
        <p className="popup-text">
          On behalf of the{" "}
          <strong>AIIFA Sustainable Steel Manufacturers Association</strong>, we
          extend our sincere gratitude to all delegates, exhibitors, and
          visitors for making the{" "}
          <strong>
            37th National Conference – STEELEX 2025: The Steel Mahakumbh
          </strong>{" "}
          a resounding success.
        </p>

        <p className="popup-text">
          Your presence, participation, and enthusiasm transformed this event
          into a true celebration of India’s steel strength — inspiring
          collaboration, innovation, and a shared vision for a sustainable
          future.
        </p>

        <p className="popup-bold">
          Together, we have forged stronger connections and set new benchmarks
          for the industry.
        </p>

        {/* Image Row */}
        <div className="popup-images">
          <img
            src="/media/about/popup.jpg"
            alt="STEELEX 2025"
            className="event-img"
          />

          <div className="leaders">
            <div className="leader-card">
              <img
                src="/media/about/president.jpg"
                alt="President"
                className="leader-img"
              />
              <p className="leader-title">President</p>
            </div>

            <div className="leader-card">
              <img
                src="/media/about/secrectary.jpg"
                alt="Hon. Secretary General"
                className="leader-img"
              />
              <p className="leader-title">Hon. Secretary General</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/SteelEx.AIIFA" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/SteelEx_AIIFA" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCgX9MQQDCQgP0cryzxKlGkw"
            className="youtube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/steelex_aiifa/"
            className="instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;
