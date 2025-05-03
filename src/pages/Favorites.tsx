import React, { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";
import { saveFavorites } from "../utils/localStorage";
import styles from "../styles/Favorites.module.css";

const getFavorites = (): Movie[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const Favorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);
  
  const removeFavorite = (id: string) => {
    const updated = favorites.filter((m) => m.imdbID !== id);
    setFavorites(updated);
    saveFavorites(updated);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Favorites</h2>
      <div className={styles.grid}>
        {favorites.map((movie) => (
          <div key={movie.imdbID} className={styles.cardWrapper}>
            <MovieCard movie={movie} />
            <button className={styles.removeButton} onClick={() => removeFavorite(movie.imdbID)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
