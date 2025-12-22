import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/Jan_2023_final.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/2.jpeg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/feb_2023_final.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/3.jpeg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/march_2023.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/April-newsletter-2023.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/May-2023-3.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/September-2023-2.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/7.jpg',
    linkUrl: '#',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/Newsletter-Nov-2023-final.pdf',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2023', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2023/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2023/Newsletter-Dec-curve-2023.pdf',
  },
];

const Newsletter2023 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2023</h2>
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

export default Newsletter2023;