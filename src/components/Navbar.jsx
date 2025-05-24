import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="text-white font-bold text-xl cursor-pointer select-none">
          MovieFinder
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 text-sm font-medium">
          <li>
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm px-6 py-4 space-y-4">
          <a
            href="#"
            className="block text-gray-300 hover:text-white font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
