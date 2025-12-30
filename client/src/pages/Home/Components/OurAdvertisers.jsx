import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurAdvertisers = () => {
  const advertisers = [
    {
      logo: "/media/advertisers-logo/electrotherm.png",
      pdf: "https://hoverbusinessservices.com/cloud/aiifa/advertisers/electrotherm-advt-page.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/manglam.png",
      pdf: "media/advertiser-pdfs/manglam.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/saru.png",
      pdf: "media/advertiser-pdfs/saru.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/bhardwaj.png",
      pdf: "media/advertiser-pdfs/bhardwaj.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/elektromag.png",
      pdf: "media/advertiser-pdfs/elektromag.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/ars.png",
      pdf: "media/advertiser-pdfs/ars.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/elite.png",
      pdf: "media/advertiser-pdfs/elite.pdf",
      name: "Electrotherm",
    },
    {
      logo: "/media/advertisers-logo/transformer-taril.png",
      pdf: "media/advertiser-pdfs/transformer-taril.pdf",
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
