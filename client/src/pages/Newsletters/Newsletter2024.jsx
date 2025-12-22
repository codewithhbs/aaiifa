import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-Jan-2024.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-Feb-2024.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/3.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-March-2024-3.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-April-2024-4.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-May-2024-2.pdf',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/6.jpeg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Newsletter-June-2024-new-4.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/July-August-Newsletter-2024.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/Sept-Newsletter-2024.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/October-Newsletter-2024-1.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/November-new-Newsletter-2024.pdf',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2024', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2024/11.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2024/December-Newsletter-2024-6.pdf',
  },
];

const Newsletter2024 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2024</h2>
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

export default Newsletter2024;