import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-wrap-layout1" className="footer-wrap-layout1">
      <div className="footer-top-layout1">
        <div className="container">
          <div className="row">
            {/* COLUMN 4 - LOGO & SOCIAL */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <div className="footer-logo-layout1">
                  <a href="/">
                    <img src="media/logo-footer.png" alt="Logo" className="logo-img" />
                  </a>
                </div>
                <div className="footer-contact-info">
                  <div className="contact-address mb-2">
                    <a href="https://maps.app.goo.gl/syV66SVGv9rKbR7Q7" className="address-text">
                      504, Pearls Omaxe, Tower- I Netaji Subhash Place, Pitampura New Delhi-110034
                    </a>
                  </div>
                  <ul className="footer-contact-layout1">
                    <li>
                      <i className="fas fa-phone mx-1"> </i>
                      <span className="contact-text "><a href="tel:09810410186" className="text-light">+919810410186</a></span>
                    </li>
                    <li>
                      <i className="fas fa-phone mx-1"> </i>
                      <span className="contact-text "><a href="tel:09810410815" className="text-light">+919810410815</a></span>
                    </li>
                    <li>
                      <i className="fas fa-phone mx-1"> </i>
                      <span className="contact-text "><a href="tel:01142725051" className="text-light">+011-42725051</a></span>
                    </li>
                    <li>
                      <i className="fas fa-envelope mx-1"> </i>
                      <span className="contact-text text-light"><a href="mailto:aaiifa6@gmail.com" className="text-light">aaiifa6@gmail.com</a></span>
                    </li>
                    <li>
                      <i className="fas fa-envelope mx-1"> </i>
                      <span className="contact-text text-light"><a href="mailto:aiifa.steelex@aaiifa.org" className="text-light">aiifa.steelex@aaiifa.org</a></span>
                    </li>
                  </ul>
                </div>
                <div className="footer-social-section">
                  <h4 className="social-title">FOLLOW US</h4>
                  <ul className="footer-social-layout1">
                    <li className="facebook">
                      <a href="https://www.facebook.com/SteelEx.AIIFA" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="https://x.com/SteelEx_AIIFA" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="https://www.youtube.com/channel/UCgX9MQQDCQgP0cryzxKlGkw" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/steelex_aiifa/" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

               
              </div>
            </div>
            {/* COLUMN 1 - USEFUL LINKS */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">USEFUL LINKS</h3>
                <ul className="footer-menu-layout1">
                  <li>
                    <a href="/about-industry">About Us</a>
                  </li>
                  <li>
                    <a href="#">Become Sponsor</a>
                  </li>
                  <li>
                    <a href="#">For Advertise</a>
                  </li>
                  <li>
                    <a href="#">Upcoming Event Registration</a>
                  </li>
                  <li>
                    <a href="#">Consultants</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/refund-policy">Refund Policy</a>
                  </li>
                  <li>
                    <a href="https://hoverbusinessservices.com/cloud/aiifa/AIIFA-Memorabilia-2025.pdf">AIIFA Memorabilia 2025</a>
                  </li>
                  <li>
                    <a href="https://hoverbusinessservices.com/cloud/aiifa/Post-Event-Report-2025.pdf">Post Event Report 2025</a>
                  </li>
                  <li>
                    <a href="#">Green Steel Certificate Awardee</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUMN 2 - OUR TEAM */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="footer-widgets">
                <h3 className="footer-widget-heading">OUR TEAM</h3>
                <ul className="footer-menu-layout1">
                  <li>
                    <a href="/governing-bodies">Governing Bodies</a>
                  </li>
                  <li>
                    <a href="/life-members">Life Member</a>
                  </li>
                  <li>
                    <a href="/national-member">National Council Member</a>
                  </li>
                  <li>
                    <a href="/active-member">Active Member</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-widgets">
  <h3 className="footer-widget-heading">Location</h3>

  {/* NEWSLETTER SECTION */}
  {/* <div className="footer-newsletter mb-3">
    <h5 className="newsletter-title">Subscribe to Our Newsletter</h5>
    <form className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
        required
      />
      <button type="submit" className="newsletter-btn">
        Subscribe
      </button>
    </form>
  </div> */}

  {/* MAP */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.229277752147!2d77.15178!3d28.690654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0234641aaaab%3A0xdb7dd47463729a2a!2sAIIFA%20Sustainable%20Steel%20Manufacturers%20Association!5e0!3m2!1sen!2sin"
    width="100%"
    height="200"
    style={{ border: "0", borderRadius: "8px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="AIIFA Office Location"
  ></iframe>
</div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom-layout1">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright-text">
              Aaiifa © {currentYear} All Right Reserved By <a href="https://hoverbusinessservices.com/">Hover
              Business Services LLP</a> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
