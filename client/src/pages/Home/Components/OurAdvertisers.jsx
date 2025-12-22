import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurAdvertisers = () => {
  const advertisers = [
    {
      logo: "/media/asso-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/asso-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/asso-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/asso-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/asso-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
  ];

  return (
    <section className="brands-section">
      <Container>
        {/* Section Header */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="brands-header">
              <h2 className="our-team-title">Our Advertisers</h2>
            </div>
          </Col>
        </Row>

        {/* Infinite Moving Carousel */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="brands-carousel-container">
              <div className="brands-carousel-track">

                {/* First set */}
                {advertisers.map((item, index) => (
                  <div key={`first-${index}`} className="brand-logo-card">
                    <div className="brand-logo-inner">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.name}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="brand-logo-image"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {advertisers.map((item, index) => (
                  <div key={`second-${index}`} className="brand-logo-card">
                    <div className="brand-logo-inner">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.name}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="brand-logo-image"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurAdvertisers;
