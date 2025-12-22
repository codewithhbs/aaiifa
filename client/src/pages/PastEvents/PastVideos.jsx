import { useNavigate } from "react-router-dom";
import React from "react";

const PastVideos = () => {
  const navigate = useNavigate();

  const events = [
    {
      year: "2025",
      title: "AIIFA Steelex 2025",
      videoUrl: "https://www.youtube.com/embed/IKOzUDAL17E",
      hasMultiple: true,
      route: "/past-videos-2025",
    },
    {
      year: "2024",
      title: "AIIFA SteelEx 2024",
      videoUrl: "https://www.youtube.com/embed/bsfNP4QvRMI",
      hasMultiple: true,
      route: "/past-videos-2024",
    },
    {
      year: "2023",
      title: "AIIFA SteelEx 2023",
      videoUrl: "https://www.youtube.com/embed/7-jEE9BlkO8",
      hasMultiple: true,
      route: "/past-videos-2023",
    },
    {
      year: "2022",
      title: "AIIFA 2022 Conference Moments",
      videoUrl: "https://www.youtube.com/embed/MSQgsZfdv1k",
      hasMultiple: false,
    },
    {
      year: "2019",
      title: "AIIFA Conference 2019",
      videoUrl: "https://www.youtube.com/embed/7fjhxlHZNp8",
      hasMultiple: false,
    },
    {
      year: "2018",
      title: "AIIFA Conference 2018",
      videoUrl: "https://www.youtube.com/embed/lYW2bN0V9Ug",
      hasMultiple: false,
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <div className="past-events-header">
          <p className="past-events-subtitle">EVENT VIDEO</p>
          <h1 className="past-events-main-title">AIIFA</h1>
        </div>

        <div className="past-events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className={`past-event-card ${
                event.hasMultiple ? "clickable" : ""
              }`}
              onClick={() =>
                event.hasMultiple && event.route
                  ? navigate(event.route)
                  : null
              }
            >
              <div className="past-event-video">
                <iframe
                  src={event.videoUrl}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="past-event-title-bar">
                <h3>{event.title}</h3>
                {event.hasMultiple && (
                  <span className="view-more-badge">View All</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastVideos;
