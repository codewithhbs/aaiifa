import React from "react";
import "./EventGallery.css";

const EventGallery2018 = () => {
  const images = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/2.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/3.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/4.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/5.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/6.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/7.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/8.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/9.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/10.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/11.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/12.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/13.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/14.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/15.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/16.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/17.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/18.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/19.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/20.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/21.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/22.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/23.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/24.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/25.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/26.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/27.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/28.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/29.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/30.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/31.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/32.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/33.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/34.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/35.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/36.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/37.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/38.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/39.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/40.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/41.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/42.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/42.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/43.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/44.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/45.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/46.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/47.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/48.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/49.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/50.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/51.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/52.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/53.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/54.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/55.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/56.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/57.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/58.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/59.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/60.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/61.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/62.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/63.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/64.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/65.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/66.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/67.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/68.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/69.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/70.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/past-events/2018/71.jpg",
    
  ];

  return (
    <div className="event-gallery-container">
      <h2 className="event-gallery-title">Event 2018</h2>
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

export default EventGallery2018;