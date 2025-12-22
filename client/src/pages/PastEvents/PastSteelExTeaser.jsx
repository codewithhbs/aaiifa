import React from "react";

const PastSteelExTeaser = () => {
  const videos = [
      {
        title: "Steelex 2025 Teaser",
        videoUrl: "https://www.youtube.com/embed/epSnc4TZhtA?si=_SQ_A6npOyA_zx6E",
      },
      {
        title: "Steelex 2024 Teaser",
        videoUrl: "https://www.youtube.com/embed/9ffumQS-Zlc?si=Tlg7PHxZ877n_rzy",
      },
    {
      title: "Steelex 2023 Teaser",
      videoUrl: "https://www.youtube.com/embed/0XBg2FpEt8s?si=G6LpFjq8IgAVadKP",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <h1 className="past-events-main-title">AIIFA Steelex Teasers</h1>

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

export default PastSteelExTeaser;
