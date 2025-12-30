import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const newsletters = [
    { year: "2025", link: "/newsletter-2025" },
    { year: "2024", link: "/newsletter-2024" },
    { year: "2023", link: "/newsletter-2023" },
    { year: "2022", link: "/newsletter-2022" },
    { year: "2021", link: "/newsletter-2021" },
    { year: "2020", link: "/newsletter-2020" },
    { year: "2019", link: "/newsletter-2019" },
    { year: "2018", link: "/newsletter-2018" },
    { year: "2017", link: "/newsletter-2017" },
    { year: "2016", link: "/newsletter-2016" },
  ];

  // ================= SUBMIT HANDLER =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.aaiifa.org/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "Thank you for subscribing! You’ll now receive our latest updates."
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);

        setEmail("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="newsletter-page py-5">
      <Container>
        <Row>

          {/* LEFT: CURRENT NEWSLETTER */}
          <Col lg={8} className="mb-4">
            <h2 className="our-team-title mb-3">
              Current Newsletter – 2025
            </h2>

            <iframe
              src="https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/AIIFA-Newsletter-Dec-2025_compressed.pdf"
              width="100%"
              height="700px"
              title="Current Newsletter"
              style={{ border: "1px solid #ccc" }}
            />
          </Col>

          {/* RIGHT: YEAR LIST + SUBSCRIBE */}
          <Col lg={4}>
            <div className="newsletter-sidebar p-4 shadow mt-5">

              <h4 className="mb-3">Previous Newsletters</h4>

              <ul className="newsletter-year-list">
                {newsletters.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.year} Newsletter</Link>
                  </li>
                ))}
              </ul>

              {/* SUBSCRIBE BOX */}
              <div className="subscribe-box mt-5">
                <h5 className="mb-2">Subscribe to Newsletter</h5>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-newsletter w-100"
                  >
                    Subscribe
                  </button>
                </form>
                  {successMessage && <div className="success-toast">{successMessage}</div>}
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
