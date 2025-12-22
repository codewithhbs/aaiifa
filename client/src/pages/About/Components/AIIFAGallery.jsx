import React from "react";

export default function AIIFAGallery() {
  const images = [
    "media/about/about-gal1.jpg",
    "media/about/about-gal2.jpg",
    "media/about/about-gal3.jpg",
  ];

  return (
    <section className="aiifa-gallery-section py-5">
      <div className="container">
        <div className="row justify-content-center g-4">
          {images.map((img, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <div className="aiifa-gallery-img">
                <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
