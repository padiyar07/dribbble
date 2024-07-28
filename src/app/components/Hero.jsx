import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4 inline-block bg-yellow-300 text-gray-900 py-2 px-4 rounded-full text-sm font-semibold">
          Over 3 million ready-to-work creatives!
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          The world’s destination for design
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get inspired by the work of millions of top-rated designers & agencies around the world.
        </p>
        <a href="#" className="bg-gray-900 text-white rounded-full py-3 px-6 hover:bg-gray-700">
          Get started
        </a>
      </div>
    </section>
  );
};

export default Hero;
