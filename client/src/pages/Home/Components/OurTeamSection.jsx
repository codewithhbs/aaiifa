import React from "react";

/* ✅ UPDATED CARD WITH FRONT + BACK */
const TeamMemberCard = ({ name, title, company, img, bio }) => (
  <div className="our-team-flip-card">
    <div className="our-team-flip-inner">

      {/* ✅ FRONT SIDE */}
      <div className="our-team-flip-front our-team-card">
        <div className="our-team-img-wrapper">
          <img
            src={img}
            alt={`Portrait of ${name}`}
            className="our-team-img"
            loading="lazy"
          />
        </div>
        <h4 className="our-team-name">{name}</h4>
        <p className="our-team-role">{title}</p>
        <p className="our-team-company">{company}</p>
      </div>

      {/* ✅ BACK SIDE (BIO CONTENT) */}
      <div className="our-team-flip-back">
        <h4>{name}</h4>
        <p>{bio}</p>
        <span className="flip-note">Hover to flip back</span>
      </div>

    </div>
  </div>
);


/* ✅ UPDATED TEAM DATA WITH BIOS */
const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "Varad Ferro Alloys Pvt. Ltd.",
    img: "media/team/Ygesh-Mandhani-Ji-Image.jpg",
    bio: "Shri Yogesh Mandhani has been instrumental in steering the association with vision, dedication, and strong industry leadership."
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
    bio: "Shri Kamal Aggarwal is widely respected for his transparent administration and continuous service towards industry development."
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "media/team/Gopal-sir-photo-nc.jpg",
    bio: "Shri Gopal Gupta’s experience and guidance continue to inspire the present leadership of the association."
  },
  {
    name: "Shri Jitendra Singh",
    title: "Former President",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-jitendra-singh.jpg",
    bio: "Shri Jitendra Singh played an important role in strengthening collaborations and institutional growth during his tenure."
  },
  {
    name: "Shri K.K. Garg",
    title: "Former President (Northern Zonal Chairman)",
    company: "Sharu Steels Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-k.%20k.-garg.jpg",
    bio: "Shri K.K. Garg has made significant contributions towards regional coordination and industrial development."
  },
  {
    name: "Shri Sandeep Jain",
    title: "Former President",
    company: "Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
    bio: "Shri Sandeep Jain is known for his strategic leadership and strong business ethics within the steel industry."
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Former President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "media/team/g2.png",
    bio: "Shri Devendra Kumar Agrawal continues to be respected for his experience and vision for industrial progress."
  },
  {
    name: "Shri Ashok Garg",
    title: "Treasurer",
    company: "Petro Pol India Ltd Bhiwadi, Rajasthan",
    img: "media/team/ashok-garg.png",
    bio: "Shri Ashok Garg’s distinguished tenure as Treasurer of the AIIFA Sustainable Steel Manufacturers Association since 1999 is widely regarded as a benchmark of unwavering commitment and exemplary financial leadership."
  }
  
];


/* ✅ MAIN SECTION */
export default function OurTeamSection() {
  return (
    <section className="our-team-section">
      <div className="our-team-container">

        <header className="our-team-header">
          <h2 className="our-team-title text-light">Our National Council Members</h2>
        </header>

        <div className="our-team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        <a
          href="/national-member"
          className="our-team-btn"
          aria-label="View the full list of national members"
        >
          View All
        </a>

      </div>
    </section>
  );
}
