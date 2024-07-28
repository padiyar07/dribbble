import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-yellow-400 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Find your next designer today</h2>
      <p className="text-lg mb-6">
        The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-black text-white py-2 px-4 rounded-full">Get started now</button>
        <button className="bg-white text-black py-2 px-4 rounded-full">Learn about hiring</button>
      </div>
      <p>
        Are you a designer? <a href="#" className="text-blue-600 underline">Join Dribbble</a>
      </p>
    </div>
  );
};

export default CallToAction;
