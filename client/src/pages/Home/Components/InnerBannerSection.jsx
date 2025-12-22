import React from 'react';
import Innerbg from '../Images/sec-bg1.jpg';

export default function InnerBannerSection() {
  return (
    <section className="inner-banner-section-improved">
      {/* Container for the background image and overlay */}
      <div
        className="inner-banner-background-wrap"
        style={{ backgroundImage: `url(${Innerbg})` }}
      >
        <div className="container">
          <div className="inner-banner-content-box">
            {/* <div className="item-content">
             
              <h2 className="item-title">Custom Steel Pipe For Your Next Project</h2>
            </div> */}
            <div className="banner-btn-wrapper">
              <a href="/contact" className="inner-banner-btn">
                Reach Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}