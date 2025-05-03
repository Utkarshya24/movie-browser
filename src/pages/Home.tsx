// src/pages/Home.tsx
import React, { useState } from "react";
import { searchMovies } from "../services/omdbApi";
import { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const res = await searchMovies(query);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        setError("No results found.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.home}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
