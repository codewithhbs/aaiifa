import React from "react";

const PastVideos2024 = () => {
  const videos = [
    {
      title: "AIIFA Steelex 2024 Day-1",
      videoUrl: "https://www.youtube.com/embed/bsfNP4QvRMI?si=EOAXIY2pCbRBSU2e",
    },
    {
      title: "AIIFA Steelex 2024 Day-2",
      videoUrl: "https://www.youtube.com/embed/nyaniDL-6Ag?si=iT-WVmcS_FlGigM8",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <h1 className="past-events-main-title">AIIFA SteelEx 2024</h1>

        <div className="past-events-grid">
          {videos.map((video, index) => (
            <div className="past-event-card" key={index}>
              <div className="past-event-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
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

export default PastVideos2024;
