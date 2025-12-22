import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

// Governing Bodies data (original)
const GoverningBodies = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "M/s SMW Ispat (P) Ltd",
    img: "media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Immediate Past President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Sr. Vice President ( Treasurer)",
    company: "M/s Reby Castings Pvt Ltd",
    img: "media/team/ashok-garg.png",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
];

// Life Members data from PDF
const LifeMembers = [
  {
    id: "LM-01",
    name: "Shri Dinesh Agarwal",
    title: "Director",
    company: "Vaishnav Wire And Rod P. Ltd"
  },
  {
    id: "LM-02",
    name: "Shri Vijah Agarwal",
    title: "Director",
    company: "Refine Industries Limited"
  },
  {
    id: "LM-03",
    name: "Shri Pramod Saraf",
    title: "Director",
    company: "Jai Bhavani Steel Enterprise Ltd."
  },
  {
    id: "LM-04",
    name: "Shri Pramod Saraf", // Note: Same name as LM-03 but different company
    title: "Director",
    company: "Inducto Steel Ltd."
  },
  {
    id: "LM-05",
    name: "Shri N. Venkatesh",
    title: "MD",
    company: "Jai Raj Ispat Limited"
  },
  {
    id: "LM-06",
    name: "Shri N. Venkatesh", // Note: Same name as LM-05 but different company
    title: "Director",
    company: "Vijay Iron Foundry Pvt. Ltd."
  },
  {
    id: "LM-07",
    name: "Shri P Venkitrapathy",
    title: "Director",
    company: "Hi-Tech Mineral Industries Coval (Pvt) Ltd."
  },
  {
    id: "LM-08",
    name: "Shri P Venkitrapathy", // Note: Same name as LM-07 but different company
    title: "Director",
    company: "Alloysmin Industries"
  },
  {
    id: "LM-09",
    name: "Shri Pandeey Jain",
    title: "Director",
    company: "Antarctic Industries Ltd"
  },
  {
    id: "LM-10",
    name: "Shri Pandeey Jain", // Note: Same name as LM-09 but different company
    title: "Director",
    company: "Laxcon Steels Ltd"
  },
  {
    id: "LM-11",
    name: "Shri K.K. Garg",
    title: "Director",
    company: "Sharu Steels Limited"
  },
  {
    id: "LM-12",
    name: "Shri K.K. Garg", // Note: Same name as LM-11 but different company
    title: "Director",
    company: "Prime Ispat Limited"
  },
  {
    id: "LM-13",
    name: "Shri Sandeep Biyani",
    title: "Director",
    company: "Real Ispat & Power Ltd"
  },
  {
    id: "LM-14",
    name: "Shri Sandeep Biyani", // Note: Same name as LM-13 but different company
    title: "Director",
    company: "Relry Castings Pvt. Ltd"
  },
  {
    id: "LM-15",
    name: "Shri Bharat Bhushan Bansal",
    title: "Director",
    company: "Petropol India Ltd."
  },
  {
    id: "LM-16",
    name: "Shri Bharat Bhushan Bansal", // Note: Same name as LM-15 but different company
    title: "Director",
    company: "Precon Technology and Castings Ltd"
  },
  {
    id: "LM-17",
    name: "Shri Kamal Aggarwal",
    title: "Director",
    company: "NIFS Steels"
  },
  {
    id: "LM-18",
    name: "Shri Satish Chand Goel",
    title: "Director",
    company: "Trikoot Iron & Steel Castings Ltd."
  },
  {
    id: "LM-19",
    name: "Shri Vats Rathi",
    title: "Director",
    company: "Rathi TMT Saria P. Ltd."
  },
  {
    id: "LM-20",
    name: "Shri Amit Jain",
    title: "Plant Head",
    company: "Shri Shyam Kripa Steel Pvt. Ltd"
  },
  {
    id: "LM-21",
    name: "Mr. Niraj Kumar",
    title: "Director",
    company: "Streeyam Power and Steel Industries Ltd"
  },
  {
    id: "LM-22",
    name: "Shri Rajesh Kabra",
    title: "Director",
    company: "Raghav Productivity Enhancers Ltd"
  },
  {
    id: "LM-23",
    name: "Shri B. Venkata Narayana",
    title: "Director",
    company: "Crest Steel & Power Private Limited"
  },
  {
    id: "LM-24",
    name: "Shri Rajkumar Daga & Shri Nikunj Daga",
    title: "Directors",
    company: "Nikunj Udyog"
  },
  {
    id: "LM-25",
    name: "Shri Raghav Goel",
    title: "Director",
    company: "Kisco Castings (INDIA) Ltd."
  },
  {
    id: "LM-26",
    name: "Shri Yogesh Mandhani",
    title: "Director",
    company: "Varad Ferro Alloys Pvt. Ltd."
  }
];

export default function OurTeam() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("governing"); // "governing" or "life"

  const filteredGoverningBodies = GoverningBodies.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLifeMembers = LifeMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle">OUR TEAM</p>
          <h2 className="our-team-title">Our Team</h2>

          {/* Tab Navigation */}
          <div className="our-team-tabs">
            <button 
              className={`our-team-tab ${activeTab === "governing" ? "active" : ""}`}
              onClick={() => setActiveTab("governing")}
            >
              Governing Bodies
            </button>
            <button 
              className={`our-team-tab ${activeTab === "life" ? "active" : ""}`}
              onClick={() => setActiveTab("life")}
            >
              Life Members
            </button>
          </div>

          {/* Search Bar */}
          <div className="our-team-search-wrapper">
            <div className="our-team-search-box">
              <Search className="our-team-search-icon" size={18} />
              <input
                type="text"
                placeholder={`Search ${activeTab === "governing" ? "governing bodies" : "life members"}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="our-team-search"
              />
            </div>
          </div>

          {/* Governing Bodies Section */}
          {activeTab === "governing" && (
            <div className="our-team-grid">
              {filteredGoverningBodies.map((member, index) => (
                <div className="our-team-card" key={index}>
                  <div className="our-team-img-wrapper">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="our-team-img"
                    />
                  </div>
                  <h4 className="our-team-name">{member.name}</h4>
                  <p className="our-team-role">{member.title}</p>
                  <p className="our-team-company">{member.company}</p>
                </div>
              ))}
            </div>
          )}

          {/* Life Members Section */}
          {activeTab === "life" && (
            <div className="our-team-grid">
              {filteredLifeMembers.map((member, index) => (
                <div className="our-team-card" key={index}>
                  <div className="our-team-img-wrapper">
                    {/* Placeholder for life members images - you can add actual images later */}
                    <div className="our-team-img-placeholder">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="our-team-id">{member.id}</div>
                  <h4 className="our-team-name">{member.name}</h4>
                  <p className="our-team-role">{member.title}</p>
                  <p className="our-team-company">{member.company}</p>

                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {activeTab === "governing" && filteredGoverningBodies.length === 0 && (
            <div className="our-team-no-results">
              No governing bodies found matching your search.
            </div>
          )}
          {activeTab === "life" && filteredLifeMembers.length === 0 && (
            <div className="our-team-no-results">
              No life members found matching your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
}