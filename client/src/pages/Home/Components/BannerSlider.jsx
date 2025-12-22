import Carousel from "react-bootstrap/Carousel";

function BannerSlider() {
  const images = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.1.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.2.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.3.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.4.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.5.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.6.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.7.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.8.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/banner/banner1.9.jpg",
  ];

  return (
    <div className="banner-slider">
      <Carousel
        controls={true}
        indicators={true}
        interval={3000}
        fade={true}
        pause={false}
        touch={true}
      >
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <img className="banner-img" src={src} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BannerSlider;
