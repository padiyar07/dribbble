import React from 'react';
import DesignCard from './DesignCard';

const DesignsGrid = ({ designs }) => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Explore inspiring designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {designs.map((design, index) => (
          <DesignCard key={index} {...design} />
        ))}
      </div>
    </div>
  );
};

export default DesignsGrid;
