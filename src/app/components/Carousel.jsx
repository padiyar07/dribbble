import React, { useEffect, useRef } from 'react';
import Card from './Card';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let start;
    let scrollAmount = 0;

    const scrollStep = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      scrollAmount = elapsed / 20; // Adjust speed
      if (scrollAmount > 1) {
        carousel.scrollLeft += 1;
        start = timestamp;
        scrollAmount = 0;
      }
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <div ref={carouselRef} className="flex overflow-hidden whitespace-nowrap">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Carousel;
