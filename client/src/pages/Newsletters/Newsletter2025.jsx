import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'Dec',
    title: 'Dec Newsletter 2025', 
    imageUrl: 'https://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/dec-10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/AIIFA-Newsletter-Dec-2025_compressed.pdf',
  },
  {
    id: 'nov',
    title: 'Nov Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/AIIFA-Newsletter-Nov-2025.pdf',
  },
  {
    id: 'aug',
    title: 'Aug-Oct Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-Aug-to-Oct-2025.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-July-2025.pdf',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-June-2025-1.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-May-2025-1.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-April-2025-4.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/3.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-March-2025-final.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-Feb-2025-3.pdf',
  },
  {
    id: 'jan',
    title: 'Jan Newsletter 2025', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2025/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2025/Newsletter-Jan-2025.pdf',
  },
  
];

const Newsletter2025 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2025</h2> 
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

export default Newsletter2025;