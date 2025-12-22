import React from "react";
import "./PastEvents.css";

const PastEvents = () => {
  const events = [
    {
      year: "2024",
      title: "AIIFA SteelEx 2024",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/steel-event.jpg",
    },
    {
      year: "2023",
      title: "AIIFA Steelex 2023",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event.jpg",
    },
    {
      year: "2022",
      title: "2022 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-5.png",
    },
    {
      year: "2019",
      title: "2019 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event2.png",
    },
    {
      year: "2018",
      title: "2018 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-3-1.jpg",
    },
    {
      year: "2017",
      title: "2017 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-2-1.jpg",
    },
    {
      year: "2016",
      title: "2016 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-1-1.jpg",
    },
  ];

  return (
    <>
      
      <section className="past-events-section">
        <div className="past-events-container">
          <div className="past-events-header">
            <p className="past-events-subtitle">PAST EVENT</p>
            <h1 className="past-events-main-title">AIIFA</h1>
          </div>

          <div className="past-events-grid">
            {events.map((event, index) => (
              <div className="past-event-card" key={index}>
                <div className="past-event-image">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="past-event-title-bar">
                  <h3>{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PastEvents;
