import React from "react";
import "./EventGallery.css";

const EventGallery2017 = () => {
  const images = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/1.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/2.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/3.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/4.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/5.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/6.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/7.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/8.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/9.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/10.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/11.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/12.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/13.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/14.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/15.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/16.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/17.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/18.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/19.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/20.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/21.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/22.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/23.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/24.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/25.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/26.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/27.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/28.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/29.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/30.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/31.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/32.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/33.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/34.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/35.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/36.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/37.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/38.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/39.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/40.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/41.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/42.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/42.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/43.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/44.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/45.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/46.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/47.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/48.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/49.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/50.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/51.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/52.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/53.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/54.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/55.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/56.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/57.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/58.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2017/59.jpg",
    
  ];

  return (
    <div className="event-gallery-container">
      <h2 className="event-gallery-title">Event 2017</h2>
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

export default EventGallery2017;