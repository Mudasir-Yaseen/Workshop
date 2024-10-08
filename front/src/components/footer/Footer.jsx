import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">About Us</h3>
            <p>
              M. Yaseen Kitchen Engineering is dedicated to providing high-quality commercial kitchen equipment tailored to your needs. Our commitment to excellence ensures that you get the best products and services.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <p>
              <strong>Email:</strong> <a href="mailto:info@myaseenkitchen.com" className="hover:text-yellow-400">info@myaseenkitchen.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-yellow-400">+123 456 7890</a>
            </p>
            <p>
              <strong>Address:</strong> Your Workshop Address Here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-yellow-400 transition duration-300">Products</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-400 transition duration-300">Portfolio</a></li>
              <li><a href="#visit" className="hover:text-yellow-400 transition duration-300">Visit Us</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} M. Yaseen Kitchen Engineering. All rights reserved.
          </p>
          <p className="text-xs mt-2">Designed with care and dedication.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
