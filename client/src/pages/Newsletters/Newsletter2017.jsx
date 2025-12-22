import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css';

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/Jan-2017-curve.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/Feb-2017-final.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/3.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/March-2017-final.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/April-2017.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/May-2017.pdf',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/June-2017.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/newslettrJuly-final-1.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/Newslettr-August-Final.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/newsletter-sep-oct-2017.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2017', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2017/10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2017/newsletter-sep-oct-2017.pdf',
  },
];

const Newsletter2017 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2017</h2>
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

export default Newsletter2017;