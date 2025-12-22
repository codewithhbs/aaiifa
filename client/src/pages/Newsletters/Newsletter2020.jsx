import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jul',
    title: 'July Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/1.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2020/Newsletter-July-2020.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/2.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2020/Newsletter-August-2020-2.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/3.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2020/Newsletter-september-curve-2020.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/4.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2020/NewsletterOctober-2020-1.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/5.png',
    linkUrl: '#',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2020', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2020/6.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2020/Newsletter-December-Final-2020.pdf',
  },
];

const Newsletter2020 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2020</h2>
      <div className="newsletter-grid">
        {newsletterData.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            title={newsletter.title}
            imageUrl={newsletter.imageUrl}
            linkUrl={newsletter.linkUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Newsletter2020;