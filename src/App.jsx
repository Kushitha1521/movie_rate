import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import useDebounce from './hooks/useDebounce';

const API_KEY = 'b4fb9e25';

const App = () => {
  const [query, setQuery] = useState('Avengers');
  const debouncedQuery = useDebounce(query, 500);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setMovies([]);
      setError('');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === 'True') {
        // Fetch full details in parallel for ratings and extra info
        const moviesWithDetails = await Promise.all(
          data.Search.map(async (movie) => {
            const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
            const fullData = await res.json();
            return { ...movie, ...fullData };
          })
        );
        setMovies(moviesWithDetails);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className='mt-[60px]'>
      <Navbar />
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      
      <main className="p-6 flex-grow max-w-7xl mx-auto">
        <Header query={query} setQuery={setQuery} />
        {loading && (
          <p className="text-center text-lg mt-8 animate-pulse">Loading movies...</p>
        )}
        {error && !loading && (
          <p className="text-center text-red-500 mt-8 font-semibold">{error}</p>
        )}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {!loading && !error && movies.length === 0 && (
            <p className="text-center col-span-full text-xl font-medium">No movies found</p>
          )}
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default App;
