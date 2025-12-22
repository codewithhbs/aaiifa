import React, { useState } from "react";
import { Search } from "lucide-react";

const LifeMembers = [
  {
    id: "LM-01",
    name: "Shri Dinesh Agarwal Shri Vipin Agarwal",
    desc: "LM-01",
    title: "Director",
    company: "Shree Vaishnav Wire And Rod P. Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-02",
    name: "Shri Purushottam Jalan",
    desc: "LM-02",
    title: "Director",
    company: "Refine Industries Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-03",
    name: "Shri Pramod Saraf",
    desc: "LM-03",
    title: "Director",
    company: "Jai Bhawani Steel Enterprise Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-04",
    name: "Shri Rajeev Reniwal",
    desc: "LM-04",
    title: "Director",
    company: "Inducto Steel Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-05",
    name: "Shri N. Venkatesh",
    desc: "LM-05",
    title: "MD",
    company: "Jai Raj Ispat Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-06",
    name: "Shri Suresh Kumar Singhal",
    desc: "LM-06",
    title: "Director",
    company: "Vijay Iron Foundry Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-07",
    name: "Shri P Venkittapathy",
    desc: "LM-07",
    title: "Director",
    company: "Hi-Tech Mineral Industries Covai (Pvt) Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-08",
    name: "Shri Ashok Sharma",
    desc: "LM-08",
    title: "Director",
    company: "Alloysmin Industries",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-09",
    name: "Shri Sandeep Jain",
    desc: "LM-09",
    title: "Director",
    company: "Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
  },
  {
    id: "LM-10",
    name: "Shri Gopal Gupta",
    desc: "LM-10",
    title: "Director",
    company: "Laxcon Steels Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-11",
    name: "Shri K.K. Garg",
    desc: "LM-11",
    title: "Former President",
    subtitle: "(Northern Zonal Chairman)",
    company: "Sharu Steels Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-k. k.-garg.jpg",
  },
  {
    id: "LM-12",
    name: "Shri Pawan Agarwal",
    desc: "LM-12",
    title: "Former President",
    company: "Prime Ispat Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-13",
    name: "Shri Sandeep Biyani",
    desc: "LM-13",
    title: "Former President",
    company: "Real Ispat & Power Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-14",
    name: "Shri Ashok Garg",
    desc: "LM-14",
    title: "Treasurer",
    company: "Petro Pol India Ltd Bhiwadi, Rajasthan",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/Shri Ashok Garg.png",
  },
  {
    id: "LM-15",
    name: "Shri Bharat Bhushan Bansal",
    desc: "LM-15",
    title: "Director",
    company: "Petropol India Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-16",
    name: "Shri Sudhanshu Agarwal",
    desc: "LM-16",
    title: "Director",
    company: "Precon Technology and Castings Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-sudhanshu-agarwal.png",
  },
  {
    id: "LM-17",
    name: "Shri Kamal Aggarwal",
    desc: "LM-17",
    title: "Director",
    company: "NIFS Steels",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-kamal-aggarwal.jpg",
  },
  {
    id: "LM-18",
    name: "Shri Satish Chand Goel",
    desc: "LM-18",
    title: "Director",
    company: "Trikoot Iron & Steel Castings Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-satish -chand -goel.jpg",
  },
  {
    id: "LM-19",
    name: "Shri Nimit Aggarwal",
    desc: "LM-19",
    title: "Director",
    company: "NIFS Steels LLP ",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-20",
    name: "Shri Amit Jain",
    desc: "LM-20",
    title: "Plant Head",
    company: "Shri Shyam Kripa Steel Pvt. Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-amit-jain.jpg",
  },
  {
    id: "LM-21",
    name: "Mr. Niraj Kumar",
    desc: "LM-21",
    title: "",
    company: "Shreeyam Power and Steel Industries Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-22",
    name: "Shri Rajesh Kabra",
    desc: "LM-22",
    title: "",
    company: "Raghav Productivity Enhancers Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-23",
    name: "Shri B. Venkata Narayana",
    desc: "LM-23",
    title: "",
    company: "Crest Steel & Power Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-24",
    name: "Shri Rajkumar Daga Shri Nikunj Daga",
    desc: "LM-24",
    title: "",
    company: "Nikunj Udyog",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-25",
    name: "Shri Raghav Goel",
    desc: "LM-25",
    title: "",
    company: "Kisco Castings (INDIA) Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    id: "LM-26",
    name: "Shri Yogesh Mandhani",
    desc: "LM-26",
    title: "",
    company: "Varad Ferro Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },

];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = LifeMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle mb-4">LIFE MEMBER</p>
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