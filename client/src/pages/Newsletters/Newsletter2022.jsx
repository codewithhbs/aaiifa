import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-Jan-2022.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-of-Feb-2022.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/3.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-March-2022-4.pdf',
  },
  {
    id: 'apr',
    title: 'April May June Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/April-May-June-2022.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-July-2022.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/August-Newsletter-2022.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-SEPT.-2022.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-October-curve-2022.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/Newsletter-November-2022.pdf',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2022', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2022/10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2022/December-final-2022.pdf',
  },
];

const Newsletter2022 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2022</h2>
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

export default Newsletter2022;