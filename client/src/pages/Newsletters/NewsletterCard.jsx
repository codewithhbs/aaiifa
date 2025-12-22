import React from 'react';
import './newsletter.css';

const NewsletterCard = ({ title, imageUrl, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      className="newsletter-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="newsletter-image-container">
        <img src={imageUrl} alt={title} className="newsletter-image" />
      </div>
      <div className="newsletter-caption">
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default NewsletterCard;