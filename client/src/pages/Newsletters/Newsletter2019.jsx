import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/1.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-Jan-2019.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/2.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-Feb-2019.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/3.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-March-2019.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/4.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-April-2019.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/5.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-May-2019.pdf',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/6.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-June-2019.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/7.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-July-2019.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/8.png',
    linkUrl: '#',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/9.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-September-2019.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/10.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/Newsletter-October-2019.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2019', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2019/11.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2019/November-2019.pdf',
  },
];

const Newsletter2019 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2019</h2>
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

export default Newsletter2019;