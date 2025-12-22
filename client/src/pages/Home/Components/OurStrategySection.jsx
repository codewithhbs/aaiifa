import React, { useEffect, useRef, useState } from 'react';
import { FaEye, FaRocket, FaGem, FaUsers } from 'react-icons/fa';

const FourCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const cards = [
    {
      id: '01',
      icon: <FaUsers />,
      title: 'WHO WE ARE',
      description:
        'We are a leading industry association representing India’s secondary steel sector,uniting over 1,800 manufacturers to advance sustainable, innovative, and globally competitive steel production.',
      color: '#FF5E14'
    },
    {
      id: '02',
      icon: <FaEye />,
      title: 'VISION',
      description:
        'AIIFA Sustainable Steel Manufacturers Association aims to drive the transformation of India’s secondary steel sector through green technologies, circular economy practices, and strong industry collaboration',
      color: '#22C55E'
    },
    {
      id: '03',
      icon: <FaRocket />,
      title: 'MISSION',
      description:
        'AIIFA’s mission is to advance India’s steel industry through clean technologies, energy efficiency, and circular economy practices that reduce emissions and enhance sustainability. By fostering collaboration, capacity-building, and transparent governance, AIIFA empowers manufacturers to produce globally ompetitive, environmentally responsible steel.',
      color: '#2563EB'
    },
    {
      id: '04',
      icon: <FaGem />,
      title: 'CORE VALUES',
      description:
        'AIIFA’s core values centre on sustainability, innovation, integrity, and transparency—promoting low-carbon practices, responsible resource use, and ethical governance. Through collaboration and continuous improvement, the Association empowers steel manufacturers to stay globally competitive while driving a greener, more resilient future.',
      color: '#9333EA'
    }
  ];

  return (
    <section className="three-cards-section" ref={sectionRef}>
      <div className="three-cards-container">
        <div className="three-cards-grid">



          {/* RIGHT 4 CARDS */}
          <div className="cards-wrapper four-grid">
            {cards.map((card) => (
              <article
                key={card.id}
                className={`card ${isVisible ? 'visible' : ''}`}
                style={{
                  border: `1px solid ${card.color}`,
                  boxShadow: `0 8px 20px ${card.color}20`
                }}
              >
                <div className="card-number" style={{ color: card.color }}>
                  {card.id}
                </div>

                <div
                  className="card-icon"
                  style={{ backgroundColor: card.color }}
                >
                  {card.icon}
                </div>

                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FourCardsSection;
