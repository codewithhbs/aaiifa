import React from 'react';
import NewsletterCard from './NewsletterCard';
import './newsletter.css'; 

const newsletterData = [
  {
    id: 'jan',
    title: 'Jan Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/1.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newsletter-jan-2016.pdf',
  },
  {
    id: 'feb',
    title: 'Feb Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/2.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newletter-Feb-2016.pdf',
  },
  {
    id: 'mar',
    title: 'March Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/3.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newletter-March-2016.pdf',
  },
  {
    id: 'apr',
    title: 'April Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/4.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newletter-april-2016.pdf',
  },
  {
    id: 'may',
    title: 'May Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/5.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newsletter-May-2016.pdf',
  },
  {
    id: 'jun',
    title: 'June Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/June-July-Final-2016-curve.pdf',
  },
  {
    id: 'jul',
    title: 'July Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/6.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/June-July-Final-2016-curve.pdf',
  },
  {
    id: 'aug',
    title: 'Aug Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/7.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/Newsletter-August-2016.pdf',
  },
  {
    id: 'Sep',
    title: 'Sep Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/8.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/sep-oct-nov-2016.pdf',
  },
  {
    id: 'Oct',
    title: 'Oct Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/9.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/sep-oct-nov-2016.pdf',
  },
  {
    id: 'Nov',
    title: 'Nov Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/10.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/sep-oct-nov-2016.pdf',
  },
  {
    id: 'Dec',
    title: 'Dec Newsletter 2016', 
    imageUrl: 'http://hoverbusinessservices.com/cloud/aiifa/media/newsletters/2016/11.jpg',
    linkUrl: 'https://hoverbusinessservices.com/cloud/aiifa/newsletters/2016/December-2016-3.pdf',
  },
];

const Newsletter2016 = () => {
  return (
    <section className="newsletter-section">
      <h1 className="main-title">AIIFA</h1>
      <h2 className="section-title">Newsletter 2016</h2>
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

export default Newsletter2016;