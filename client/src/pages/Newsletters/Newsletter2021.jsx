import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/1.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-January-12021-curve.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-feb.-2021-final.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/3.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-March-2021.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/4.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-April.-2021.pdf',
  },
  {
    id: 'June',
    title: 'June Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/5.png',
    linkUrl: '#',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/6.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-June.-2021-1.pdf',
  },
  {
    id: 'Aug',
    title: 'Aug Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/7.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-July-2.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-August.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Sep-Newsletter-2021.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/10.jpg',
    linkUrl: '#',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2021', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2021/11.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2021/Newsletter-November-2021-curve.pdf',
  },
];

const Newsletter2021 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2021</h2>
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

export default Newsletter2021;