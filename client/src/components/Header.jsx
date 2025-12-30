import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Industry", href: "/about-industry" },
    {
      name: "Our Team",
      dropdown: true,
      items: [
        { name: "Governing Bodies", href: "/governing-bodies" },
        { name: "National Council Member", href: "/national-member" },
        { name: "Life Member", href: "/life-members" },
        { name: "Active Member", href: "/active-member" },
      ],
    },
    // {
    //   name: "Newsletter",
    //   dropdown: true,
    //   items: [
    //     { name: "2025 Newsletter", href: "/newsletter-2025" },
    //     { name: "2024 Newsletter", href: "/newsletter-2024" },
    //     { name: "2023 Newsletter", href: "/newsletter-2023" },
    //     { name: "2022 Newsletter", href: "/newsletter-2022" },
    //     { name: "2021 Newsletter", href: "/newsletter-2021" },
    //     { name: "2020 Newsletter", href: "/newsletter-2020" },
    //     { name: "2019 Newsletter", href: "/newsletter-2019" },
    //     { name: "2018 Newsletter", href: "/newsletter-2018" },
    //     { name: "2017 Newsletter", href: "/newsletter-2017" },
    //     { name: "2016 Newsletter", href: "/newsletter-2016" },
    //   ],
    // },
   { name: "Newsletter", href: "/newsletter", isFlashy: true },


    {
      name: "Event",
      dropdown: true,
      items: [
        { name: "Past Event", href: "/past-events" },
        { name: "Event Video", href: "/past-videos" },
        { name: "Our Upcoming Events", href: "#" },
        { name: "Past SteelEx Teaser", href: "/steelex-teasers" },
      ],
    },
    { name: "Steel Handbook", href: "/steel-handbook" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper: checks if any dropdown item matches the URL
  const isDropdownActive = (items) =>
    items.some((item) => item.href === currentPath);

  return (
    <header>

      {/* Topbar */}
      <div id="topbar-wrap" className="topbar-layout1">
        <Container>
          <Row className="align-items-center text-lg-start g-2 g-lg-0">
            <Col xs={12} md={2} xl={2} className="single-item">
              <FaPhone className="item-icon" />
              <div className="item-content">
                <div className="item-title">
                  <span>Call:</span>{" "}
                  <a href="tel:911127351345">+011-42725051</a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={4} xl={3} className="single-item">
              <FaEnvelope className="item-icon" />
              <div className="item-content">
                <div className="item-title">
                  <span>E-mail Us:</span>{" "}
                  <a href="mailto:aaiifa6@gmail.com">aaiifa6@gmail.com</a>, <a href="mailto:aiifa.steelex@aaiifa.org">aiifa.steelex@aaiifa.org</a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={4} xl={4} className="single-item">
              <FaMapMarkerAlt className="item-icon" />
              <div className="item-content">
                <div className="item-title">
                  <a href="https://maps.app.goo.gl/syV66SVGv9rKbR7Q7">Pearls Omaxe, Tower-I Netaji Subhash Place, Pitampura, Delhi-110034</a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2} xl={3}  className="single-item">
            <div className="header-btn">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8mtYOUJoZu0vTAsc_sFm4ovsWDNfi6OZ8_cSVgnWmxj1ytw/viewform" target="_black" className="btn-primary d-none d-lg-inline-block">
                  Enlist Your Company Here
                </a>
                <button
                  onClick={toggleMenu}
                  className="mobile-menu-toggle d-lg-none"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navbar */}
      <div className="menu-layout1">
        <Container fluid>
          <Row className="header-height align-items-center justify-content-between px-3">

            <Col xs="8" lg="4">
              <a href="/" className="temp-logo d-inline-block">
                <img src="media/logo.png" alt="Logo" className="logo-img" />
              </a>
            </Col>

            {/* Desktop Menu */}
            <Col lg="6" className="d-none d-lg-block text-center">
              <nav className="template-main-menu">
                <ul className="nav-list">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <li key={link.name} className="nav-item">
                        <NavDropdown
                          title={link.name}
                          id={`dropdown-${link.name}`}
                          className={isDropdownActive(link.items) ? "active" : ""}
                        >
                          {link.items.map((item) => (
                            <NavDropdown.Item
                              key={item.name}
                              href={item.href}
                            >
                              {item.name}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      </li>
                    ) : (
                      <li key={link.name}>
                        <a
  href={link.href}
  className={`${currentPath === link.href ? "active" : ""} ${
    link.isFlashy ? "flashy-newsletter" : ""
  }`}
>
  {link.name}
</a>

                      </li>
                    )
                  )}
                </ul>
              </nav>
            </Col>

            {/* Actions */}
            <Col xs="4" lg="2" className="text-end">
              <div className="header-actions">
                <a href="join-us" className="btn-primary d-none d-lg-inline-block">
                  Become A Member
                </a>
                <button
                  onClick={toggleMenu}
                  className="mobile-menu-toggle d-lg-none"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </Col>

          </Row>
        </Container>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">

              {navLinks.map((link) =>
                link.dropdown ? (
                  <li key={link.name} className="mobile-dropdown">
                    <span
                      className={`dropdown-title ${
                        isDropdownActive(link.items) ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <FaChevronDown
                        className={`dropdown-icon ${
                          openDropdown === link.name ? "rotate" : ""
                        }`}
                      />
                    </span>

                    <ul
                      className={`mobile-submenu ${
                        openDropdown === link.name ? "open" : ""
                      }`}
                    >
                      {link.items.map((item) => (
                        <li key={item.name}>
                         <a
  href={link.href}
  className={`${currentPath === link.href ? "active" : ""} ${
    link.isFlashy ? "flashy-newsletter" : ""
  }`}
>
  {link.name}
</a>

                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={currentPath === link.href ? "active" : ""}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}

              <li className="mobile-cta">
                <a href="join-us" className="btn-primary-mobile">
                  Become A Member
                </a>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </header>
  );
}