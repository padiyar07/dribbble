import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-900 hover:text-gray-700">Find designers</a>
          <a href="#" className="text-gray-900 hover:text-gray-700">Inspiration</a>
          <a href="#" className="text-gray-900 hover:text-gray-700">Jobs</a>
          <a href="#" className="text-gray-900 hover:text-gray-700">Go Pro</a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">Dribbble</a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-full py-2 px-4"
          />
          <a href="#" className="text-gray-900 hover:text-gray-700">Log in</a>
          <a href="#" className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
