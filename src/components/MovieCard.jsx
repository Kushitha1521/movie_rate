import React from 'react';
import placeholder from '../assets/placeholder.png';

const MovieCard = ({ movie }) => {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : placeholder;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transform transition duration-300 cursor-pointer">
      <img
        src={poster}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.Title}</h3>
        <p className="text-sm text-gray-400">{movie.Year} • {movie.Genre || 'N/A'}</p>
        <p className="text-sm text-gray-400">Runtime: {movie.Runtime || 'N/A'}</p>
        <p className="text-yellow-400 font-semibold mt-1">⭐ IMDb: {movie.imdbRating || 'N/A'}</p>
        <p className="mt-2 text-gray-300 text-sm line-clamp-3">{movie.Plot || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
