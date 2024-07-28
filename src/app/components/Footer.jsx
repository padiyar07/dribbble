import React from 'react';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Design</h3>
            <Image src="/path/to/product-design.jpg" alt="Product Design" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Typography</h3>
            <Image src="/path/to/typography.jpg" alt="Typography" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile</h3>
            <Image src="/path/to/mobile.jpg" alt="Mobile" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Web Design</h3>
            <Image src="/path/to/web-design.jpg" alt="Web Design" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Branding</h3>
            <Image src="/path/to/branding.jpg" alt="Branding" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Animation</h3>
            <Image src="/path/to/animation.jpg" alt="Animation" className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Illustration</h3>
            <Image src="/path/to/illustration.jpg" alt="Illustration" className="w-full" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <Image src="/path/to/dribbble-logo.png" alt="Dribbble Logo" className="h-8" />
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600">For designers</a>
            <a href="#" className="text-gray-600">Hire talent</a>
            <a href="#" className="text-gray-600">Inspiration</a>
            <a href="#" className="text-gray-600">Advertising</a>
            <a href="#" className="text-gray-600">Blog</a>
            <a href="#" className="text-gray-600">About</a>
            <a href="#" className="text-gray-600">Careers</a>
            <a href="#" className="text-gray-600">Support</a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">&copy; 2024 Dribbble Terms Privacy Cookies</p>
          <div className="flex space-x-4">
            <a href="#"><Image src="/path/to/twitter-icon.png" alt="Twitter" className="h-6" /></a>
            <a href="#"><Image src="/path/to/facebook-icon.png" alt="Facebook" className="h-6" /></a>
            <a href="#"><Image src="/path/to/instagram-icon.png" alt="Instagram" className="h-6" /></a>
            <a href="#"><Image src="/path/to/pinterest-icon.png" alt="Pinterest" className="h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
