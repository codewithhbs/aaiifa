import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurBrands = () => {
  const brandLogos = [
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand2.png",
    "/media/about/brand3.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand4.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand5.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand6.jpg",


    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand1.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand2.png",
    "/media/about/brand3.jpg",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand4.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand5.png",
    "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand6.jpg",
  ];

  return (
    <section className="brands-section">
      <Container>
        {/* Section Header */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="brands-header">
            {/* <p className="our-team-subtitle"> Partners</p> */}
              <h2 className="our-team-title">
                Associate Partners
              </h2>
            </div>
          </Col>
        </Row>

        {/* Infinite Moving Carousel */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="brands-carousel-container">
              <div className="brands-carousel-track">
                {/* First set */}
                {brandLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="brand-logo-card">
                    <div className="brand-logo-inner">
                      <img
                        src={logo}
                        alt={`Brand ${index + 1}`}
                        className="brand-logo-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brandLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="brand-logo-card">
                    <div className="brand-logo-inner">
                      <img
                        src={logo}
                        alt={`Brand ${index + 1}`}
                        className="brand-logo-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>


        {/* <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="brands-bottom-text">
              <p>within five years without</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default OurBrands;