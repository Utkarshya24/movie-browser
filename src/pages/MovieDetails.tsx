import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/omdbApi";
import { MovieDetail } from "../types/movie";
import { getFavorites, saveFavorites } from "../utils/localStorage";
import styles from "../styles/MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then((res) => setMovie(res.data));
    }
  }, [id]);

  const addToFavorites = () => {
    const favorites = getFavorites();
    if (!favorites.find((f: MovieDetail) => f.imdbID === movie?.imdbID)) {
    saveFavorites([...favorites, movie]);
    }
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = stored.find((m: any) => m.imdbID === movie?.imdbID);
    if (!exists && movie) {
      localStorage.setItem("favorites", JSON.stringify([...stored, movie]));
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>{movie.Title}</h2>
    <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
    <p className={styles.info}>
      <span className={styles.bold}>Ratings:</span>{" "}
      {movie.Ratings.map((r) => `${r.Source}: ${r.Value}`).join(", ")}
    </p>
<button className={styles.button} onClick={addToFavorites}>Add to Favorites</button>
  </div>
  );
};

export default MovieDetails;
