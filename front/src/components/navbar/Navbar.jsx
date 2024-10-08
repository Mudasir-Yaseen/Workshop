import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition duration-200">
              M. Yaseen Kitchen Engineering
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/products" className="hover:text-yellow-400 text-lg font-semibold transition duration-200">Products</a>
            <a href="#portfolio" className="hover:text-yellow-400 text-lg font-semibold transition duration-200">Portfolio</a>
            <a href="#clients" className="hover:text-yellow-400 text-lg font-semibold transition duration-200">Clients</a>
            <a href="#visit" className="hover:text-yellow-400 text-lg font-semibold transition duration-200">Visit Workshop</a>
            <a href="/quotation" className="hover:text-yellow-400 text-lg font-semibold transition duration-200">Quotation</a>
            <a href="/bill-maker" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold shadow-md transition duration-200">
              Bill Maker
            </a>
            <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold shadow-md transition duration-200">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-500 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <a href="#home" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 text-lg font-semibold transition duration-200">Home</a>
          <a href="#products" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 text-lg font-semibold transition duration-200">Products</a>
          <a href="#portfolio" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 text-lg font-semibold transition duration-200">Portfolio</a>
          <a href="#clients" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 text-lg font-semibold transition duration-200">Clients</a>
          <a href="#visit" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 text-lg font-semibold transition duration-200">Visit Workshop</a>
          <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-yellow-500 hover:text-white text-lg font-semibold transition duration-200">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
