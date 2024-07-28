import React from "react";
import Image from 'next/image'
const DesignCard = ({ image, name, title, likes, views }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 mx-2 mb-6">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Image
            src={name.avatar}
            alt={name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <h3 className="text-sm font-bold">{name}</h3>
          <span className="text-gray-500 text-xs ml-2">{title}</span>
        </div>
        <div className="flex justify-between items-center text-gray-500 text-xs">
          <div>
            <i className="fas fa-heart"></i> {likes}
          </div>
          <div>
            <i className="fas fa-eye"></i> {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
