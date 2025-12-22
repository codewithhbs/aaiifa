import React from "react";
import "./PartnersSection.css";

const PartnersSection = () => {
  const partners = [
    { name: "INSDAG", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo1.bmp" },
    { name: "MRAI", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo2.png" },
    { name: "NICT", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo3.png" },
    { name: "SIMA", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo4.jpg" },
    { name: "SFA", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo5.png" },
    { name: "SRTMI", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/logo6.jpg" },
  ];

  const sponsors = [
    { name: "Vandana Ispat", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/spo-logo1.jpg" },
    { name: "Advance Hydrau-Tech", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/spo-logo2.jpg" },
    { name: "JSW Steel", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/jsw-steel.jpg" },
    { name: "JPC", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/jpc-1.bmp" },
    { name: "Electrotherm", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/electro.png" },
  ];

  const media = [
    { name: "Steel Scenario", img: "http://hoverbusinessservices.com/cloud/aiifa/media/partners/Steel-Scenario.jpg" },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="section-title">Our Partner</h2>
        <div className="logo-grid">
          {partners.map((p, i) => (
            <div className="logo-card" key={i}>
              <img src={p.img} alt={p.name} />
            </div>
          ))}
        </div>

        <h2 className="section-title">Our Sponsor</h2>
        <div className="logo-grid">
          {sponsors.map((s, i) => (
            <div className="logo-card" key={i}>
              <img src={s.img} alt={s.name} />
            </div>
          ))}
        </div>

        <h2 className="section-title">Media Partner</h2>
        <div className="logo-grid">
          {media.map((m, i) => (
            <div className="logo-card" key={i}>
              <img src={m.img} alt={m.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
