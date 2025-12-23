import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurBrands = () => {
  const brands = [
    { src: "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand1.png" },
    { 
      src: "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand2.png", 
      link: "https://mrai.org.in/events/upcoming-events.html",
      isFeatured: true, // This triggers the highlight
      eventText: "MRAI 2026: Jan 20-22, 2026"
    },
    { src: "/media/about/brand3.jpg" },
    { src: "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand4.png" },
    { src: "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand5.png" },
    { src: "http://hoverbusinessservices.com/cloud/aiifa/media/brand/brand6.jpg" },
  ];

  const renderBrand = (brand, index, suffix) => {
    const content = (
      <div className={`brand-logo-inner ${brand.isFeatured ? 'featured-event-card' : ''}`}>
        <img src={brand.src} alt="Brand Logo" className="brand-logo-image" />
        {brand.isFeatured && (
          <div className="special-event-badge">IMRC 2026</div>
        )}
      </div>
    );

    return (
      <div key={`${suffix}-${index}`} className="brand-logo-card">
        {brand.link ? (
          <a href={brand.link} target="_blank" rel="noopener noreferrer" title={brand.eventText}>
            {content}
          </a>
        ) : content}
      </div>
    );
  };

  return (
    <section className="brands-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
             <h2 className="our-team-title">Associate/Knowledge Partners</h2>
             <div className="event-announcement-bar">
                🚀 <strong>MRAI 2026:</strong> International Material Recycling Conference & Exposition (#IMRC2026) — Jan 20, 21 & 22, 2026
             </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="brands-carousel-container">
              <div className="brands-carousel-track">
                {brands.map((brand, i) => renderBrand(brand, i, "first"))}
                {brands.map((brand, i) => renderBrand(brand, i, "second"))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurBrands;