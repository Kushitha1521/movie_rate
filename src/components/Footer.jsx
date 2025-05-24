import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 mt-12 text-sm text-gray-400 select-none">
      Developed by <span className="text-white font-semibold">Kushitha Lakshitha</span> |{' '}
      <a
        href="https://kushithalakshitha.vercel.app/"
        className="text-blue-400 hover:underline hover:text-blue-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </footer>
  );
};

export default Footer;
