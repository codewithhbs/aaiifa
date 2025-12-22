import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="about-us-section-image-text">
      {/* Decorative Elements */}
      <div className="about-us-decorative-ring-top" aria-hidden="true"></div>
      <div className="about-us-decorative-dots" aria-hidden="true"></div>
      <div className="about-us-decorative-shape-bottom" aria-hidden="true"></div>

      <div className="about-us-container">
        {/* ================= MAIN GRID CARD ================= */}
        <div className="about-us-card">
          {/* ===== LEFT: IMAGE COLUMN ===== */}
          <div className="about-us-image-column">
            <div className="about-us-main-image-wrapper">
              <figure className="aiifa-profile-image">
                <img
                  src="media/about/about-aiffa.jpg"
                  alt="AIIFA Office Building"
                  className="img-fluid"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Floating Counter */}
            <div className="about-us-counter-card">
              <div className="counter-icon-wrapper">
                <FaIndustry className="counter-icon" />
              </div>
              <div className="counter-details">
                <p className="counter-number-new">27%</p>
                <p className="counter-label-new">
                  India's Domestic Crude Steel Production
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: CONTENT COLUMN ===== */}
          <div className="about-us-content-column">
            <p className="our-team-subtitle">About The Industry</p>

            <h2 className="our-team-title">Secondary Steel Manufacturing Industries</h2>

            <h5>Dual-Route Structure of Steel Production in India</h5>
            <p className="about-us-description">
              India’s steel industry operates through a dual-route system comprising the{" "}
              <strong>Blast Furnace–Basic Oxygen Furnace (BF–BOF) route</strong> and the{" "}
              <strong>electrical steelmaking route</strong>. The BF–BOF route, characterized by
              high capital investment and large-scale operations, is predominantly used by
              integrated steel plants. In contrast, the electrical route has evolved as a more
              flexible, energy-efficient, and widely adopted option for medium and small-scale
              enterprises. This route includes <strong>Direct Reduced Iron (DRI)</strong>, which
              serves as a cost-effective alternative to traditional ironmaking;{" "}
              <strong>Electric Arc Furnaces (EAFs)</strong>, known for their adaptability in using
              scrap and DRI; <strong>Electric Induction Furnaces (EIFs)</strong>, which support
              decentralized and small-scale steelmaking; and{" "}
              <strong>Steel Re-rolling Mills (SRRMs)</strong>, which recycle and convert
              semi-finished products into finished steel. Collectively, these segments
              strengthen the resilience of India’s steel ecosystem, enhance resource
              efficiency, and play a pivotal role in meeting the country’s rapidly growing
              infrastructure-driven demand.
            </p>

          
          </div>
        </div>

        {/* ================= FULL-WIDTH EXTENDED CONTENT ================= */}
        <div className="about-us-extended-content pt-4">
          <h5>Role and Importance of the Secondary Steel Sector</h5>
            <p className="about-us-description">
              The <strong>Secondary Steel Sector</strong> is a critical pillar of India’s steel
              industry, contributing nearly <strong>half of the nation’s steel production
              capacity</strong> and supporting a vast network of small and medium enterprises.
              Dominated by EAFs and Induction Furnaces, the sector relies heavily on steel scrap
              and DRI, aligning naturally with circular economy principles and low-carbon
              growth pathways. Its decentralized presence ensures widespread availability of
              steel, generates substantial employment across industrial clusters, and delivers
              cost-effective inputs to key sectors such as construction, infrastructure,
              automotive, engineering, and manufacturing. By complementing integrated steel
              producers, the secondary sector fosters balanced industrial development and
              strengthens India’s overall steel supply chain.
            </p>
            
          <h5>Market Size, Capacity, and Strategic Significance</h5>
          <p className="about-us-description">
            With an installed steelmaking capacity exceeding{" "}
            <strong>150 MTPA</strong>, India is the{" "}
            <strong>second-largest steel producer globally</strong>. The secondary steel
            segment alone contributes <strong>55–60%</strong> of this capacity, producing a
            diverse range of long and flat products. Its extensive geographic spread enables
            efficient service to region-specific industrial needs and supports the
            Government’s infrastructure-led economic expansion. Despite its enormous
            contribution, the sector continues to face challenges in energy efficiency,
            technology modernization, and emissions reduction—particularly due to dependence
            on coal-based DRI and uneven adoption of advanced processes.
          </p>

          <h5>Pathway to Sustainability and Net Zero 2070</h5>
          <p className="about-us-description">
            The secondary steel sector will play a transformative and indispensable role in
            India’s journey toward achieving <strong>Net Zero emissions by 2070</strong>. With
            its strong reliance on scrap-based steelmaking, the sector already enjoys a lower
            carbon footprint compared to traditional routes. Future decarbonization can be
            accelerated through:
          </p>

          <ul className="about-us-description">
            <li>Transitioning to renewable energy-powered electric furnaces</li>
            <li>Improving energy efficiency and adopting advanced process optimization</li>
            <li>Strengthening scrap collection, segregation, and recycling ecosystems</li>
            <li>
              Exploring green hydrogen-based DRI, carbon capture solutions, and other emerging
              clean technologies
            </li>
          </ul>

          <p className="about-us-description">
            By embracing modernization and sustainable practices, the Secondary Steel Sector
            is positioned to become a cornerstone of India’s green industrial transition—
            supporting national climate goals while driving resilient and inclusive economic
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
