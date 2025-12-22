import React from "react";
import "./EventGallery.css";

const EventGallery2022 = () => {
  const images = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/2.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/3.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/4.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/5.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/6.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/7.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/8.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/9.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/10.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/11.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/12.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/13.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/14.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/15.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/16.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/17.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/18.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/19.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/20.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/21.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/22.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/23.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/24.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/25.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/26.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/27.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/28.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/29.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/30.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/31.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/32.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/33.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/34.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/35.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/36.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/37.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/38.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/39.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/40.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/41.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2022/42.png",
    
  ];

  return (
    <div className="event-gallery-container">
      <h2 className="event-gallery-title">Event 2022</h2>
      <div className="event-gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="event-gallery-card">
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery2022;