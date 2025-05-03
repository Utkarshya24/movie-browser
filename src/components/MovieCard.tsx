import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types/movie";
import styles from "../styles/MovieCard.module.css";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <div className={styles.card}>
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>{movie.Year}</p>
    <Link to={`/movie/${movie.imdbID}`}><button>More Info</button></Link>
  </div>
);

export default MovieCard;
