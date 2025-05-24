import React from 'react';

const Header = ({ query, setQuery }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <h2 className="text-2xl font-semibold text-white">Find your favorite movie 🎬</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="px-4 py-3 rounded-lg text-black w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        autoFocus
      />
    </header>
  );
};

export default Header;
