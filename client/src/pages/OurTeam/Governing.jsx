import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "Varad Ferro Alloys Pvt. Ltd.",
    img: "media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Jitendra Singh",
    title: "Former President",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-jitendra-singh.jpg",
  },
  {
    name: "Shri K.K. Garg",
    title: "Former President",
    subtitle: "(Northern Zonal Chairman)",
    company: "Sharu Steels Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-k.%20k.-garg.jpg",
  },

  {
    name: "Shri Sandeep Jain",
    title: "Former President",
    company: "Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Former President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Treasurer",
    company: "Petro Pol India Ltd Bhiwadi, Rajasthan",
    img: "media/team/ashok-garg.png",
  },
];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle mb-4">Our GOVERNING BODIES</p>
          {/* <h2 className="our-team-title text-white">Our Team</h2> */}

          {/* Search Bar */}
          {/* ✅ Search Bar */}
          <div className="our-team-search-wrapper">
            <div className="our-team-search-box">
              <Search size={18} className="our-team-search-icon" />
              <input
                type="text"
                placeholder="Search by name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="our-team-search-input"
              />
            </div>
          </div>


          <div className="our-team-grid">
            {filteredMembers.map((member, index) => (
              <div className="our-team-flip-card" key={index}>
                <div className="our-team-flip-inner">

                  {/* FRONT SIDE */}
                  <div className="our-team-flip-front">
                    <div className="our-team-img-wrapper">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="our-team-img"
                      />
                    </div>
                    <h4 className="our-team-name">{member.name}</h4>
                    <p className="our-team-role">{member.title}</p>
                    {member.subtitle && (
                      <p className="our-team-subtitle-br">{member.subtitle}</p>
                    )}
                    <p className="our-team-company">{member.company}</p>
                  </div>

                  {/* BACK SIDE */}
                  <div className="our-team-flip-back">
                    <h4>{member.name}</h4>
                    <p><strong>Role:</strong> {member.title}</p>
                    {member.subtitle && <p>{member.subtitle}</p>}
                    <p><strong>Company:</strong> {member.company}</p>

                    {/* ✅ You can add anything here later */}
                    <p className="flip-note">AIIFA National Member</p>
                  </div>

                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}
