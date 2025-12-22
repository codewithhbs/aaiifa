import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/newsletter-jan-2018-for-website.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/2.png',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/newsletter-Feb-final-2018-1.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/3.png',
    linkUrl: '#',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-April-2018-FINAL-curve.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/5.jpg',
    linkUrl: '#',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-June-2018-Final-1.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-July-2018-1.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-August-2018-2.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Sep-Newsletter-2018-special-edition-email.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-Oct-Nov-2018.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/11.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-Oct-Nov-2018.pdf',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2018', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2018/12.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2018/Newsletter-Dece-2018-3.pdf',
  },
];

const Newsletter2018 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2018</h2>
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

export default Newsletter2018;