import React from 'react';
import Image from 'next/image'

const Card = ({ image, name, title, tags }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 mx-2 flex-shrink-0">
      <Image src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{title}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-500 bg-gray-200 rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
