import React from "react";
import "./EventGallery.css";

const EventGallery2019 = () => {
  const images = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/2.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/3.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/4.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/5.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/6.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/7.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/8.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/9.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/10.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/11.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/12.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/13.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/14.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/15.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/16.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/17.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/18.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/19.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/20.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/21.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/22.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/23.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/24.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/25.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/26.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/27.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/28.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/29.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/30.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/31.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/32.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/33.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/34.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/35.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/36.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/37.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/38.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/39.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/40.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/41.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/42.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/43.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/44.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/45.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/46.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/47.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/48.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/49.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/50.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/51.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/52.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/53.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/54.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/55.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/56.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/57.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/58.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/59.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/60.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/61.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2019/62.png",
    
  ];

  return (
    <div className="event-gallery-container">
      <h2 className="event-gallery-title">Event 2019</h2>
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

export default EventGallery2019;