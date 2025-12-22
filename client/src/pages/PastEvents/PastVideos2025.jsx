import React from "react";

const PastVideos2025 = () => {
  const videos2025 = [
    {
      title: "AIIFA Steelex 2025 – Opening Ceremony",
      videoUrl: "https://www.youtube.com/embed/IKOzUDAL17E?si=O-lMMGmUHrEX1OeA",
    },
    {
      title: "AIIFA Steelex 2025 – Day 1",
      videoUrl: "https://www.youtube.com/embed/per_vkozQRw?si=Z5hwiA97_Wx3wsV6",
    },
    {
      title: "AIIFA Steelex 2025 – Day 2",
      videoUrl: "https://www.youtube.com/embed/FH3EkJssALw?si=pQ1m8bCEK5zeLH9n",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <div className="past-events-header">
          <p className="past-events-subtitle">EVENT VIDEOS</p>
          <h1 className="past-events-main-title">AIIFA Steelex 2025</h1>
        </div>

        <div className="past-events-grid">
          {videos2025.map((video, index) => (
            <div className="past-event-card" key={index}>
              <div className="past-event-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="past-event-title-bar">
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastVideos2025;
