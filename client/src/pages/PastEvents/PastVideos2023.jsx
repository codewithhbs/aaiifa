import React from "react";

const PastVideos2023 = () => {
  const videos = [
    {
      title: "AIIFA Steelex 2023 Day-1",
      videoUrl: "https://www.youtube.com/embed/7-jEE9BlkO8?si=_fGVO-Y3A7yvsv7S",
    },
    {
      title: "AIIFA Steelex 2023 Day-2",
      videoUrl: "https://www.youtube.com/embed/WdI6odf_iHk?si=M5RPy_4RI-zjXEbR",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <h1 className="past-events-main-title">AIIFA SteelEx 2023</h1>

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

export default PastVideos2023;
