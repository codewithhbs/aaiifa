import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

const NationalMember = [

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
  {
    name: "Shri Ashok Surana",
    title: "Patron",
    company: "M/s Shobha Enterprises",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ashok-surana.jpg",
  },
  {
    name: "Shri Dev Gupta",
    title: "Sr. Vice President",
    company: "M/s Renny Strips (P) Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-dev-gupta.jpg",
  },
  {
    name: "Shri Anil Goyal",
    title: "Sr. Vice President",
    company: "M/s Kalika Steel Jalna, Maharashtra",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Chandraprakash R Dad",
    title: "Sr. Vice President",
    company: "M/s Viraj Steel Mumbai, Maharashtra",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Subhash Chand Agrawal",
    title: "Vice President",
    company: "M/s Shivali Udyog (I) Private Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Lalit Bansal",
    title: "Vice President",
    company: "M/s SBF Ispat Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Ramesh Chand Goyal",
    title: "Vice President",
    company: "M/s BDG Metal & Power Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ramesh-chand-goyal.jpg",
  },
  {
    name: "Shri Ashwani Bhatia",
    title: "Vice President",
    company: "M/s ARS Steels & Alloy International Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ashwani-bhatia.jpg",
  },
  {
    name: "Shri Rajesh Kabra",
    title: "Vice President",
    company: "M/s Raghav Productivity Enhancers Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri S.S. Agarwal",
    title: "Vice President",
    company: "M/s Premium Ferro Alloys Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-s.s.-agarwal.png",
  },
  {
    name: "Shri Saurabh Mishra",
    title: "Eastern Zonal Chairman",
    company: "Amalgam Steel Ltd (Crest Steel & Power Private Limited Raipur, W.B",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Dinesh Agarwal",
    title: "Western Zonal Chairman",
    company: "Nature Exo Bldg. Pvt. Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Suman Saraf",
    title: "Southern Zonal Chairman",
    company: "Radha Smelters Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Ramesh Agarwal",
    title: "Central Zonal Chairman",
    company: "G. R. Sponge And Power Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Keyur Shah",
    title: "Gujarat State Chairman",
    company: "Mono Steel (India) Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Sudesh Sharma",
    title: "Rajasthan State Chairman",
    company: "Shri Prithvi Alloys Pvt ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Mohinder Gupta",
    title: "Punjab State Chairman",
    company: "Gian Castings Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-mohinder-gupta.jpg",
  },
  {
    name: "Shri Kamal Goyal",
    title: "UP State Chairman",
    company: "Amba Shakti Udyog",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Jullain Jallan",
    title: "Karnataka State Chairman",
    company: "A-One Steels Group",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Nikunj Beriwala",
    title: "West Bengal State Chairman",
    company: "SRMB Srijan Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Pawan Kumar Agarwal",
    title: "Uttarakhand State Chairman",
    company: "Shree Sidhbali Industries Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Megh Raj Garg",
    title: "Himachal State Chairman",
    company: "H M Steel Ltd ",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Pavan Singhania",
    title: "Madhya Pradesh State Chairman",
    company: "Jaideep Ispat & Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-pavan-singhania.jpg",
  },
  {
    name: "Shri Ashok Agarwal",
    title: "Cluster Chairman",
    company: "Prime Ispat Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Amarjeet Singh",
    title: "National Council Member",
    company: "Atam Concast Steels Pvt. Ltd,",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-amarjeet-singh.jpg",
  },
  {
    name: " Shri Pawan Bansal",
    name: "Shri Tanuj Bansal",
    title: "National Council Member",
    company: "Shree Jagdambay Castings Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Niwas Gupta",
    title: "National Council Member",
    company: "Shree Krishna Rolling Mills (Jaipur) Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-niwas-gupta.jpg",
  },
  {
    name: "Shri Sudhir Goyal",
    title: "National Council Member",
    company: "Madhav KRG Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Nikunj Daga",
    title: "National Council Member",
    company: "Nikunj Udyog",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Nimit Aggarwal",
    title: "National Council Member",
    company: "NIFS Steels LLP ",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },



];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = NationalMember.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle mb-4">Our National Council Members</p>
          {/* <h2 className="our-team-title text-white">Our Team</h2> */}

          {/* Search Bar */}
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