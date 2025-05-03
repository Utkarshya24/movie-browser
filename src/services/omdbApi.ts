import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = (query: string) =>
  axios.get(BASE_URL, { params: { s: query, apiKey: API_KEY } });

export const getMovieDetails = (id: string) =>
  axios.get(BASE_URL, { params: { i: id, apiKey: API_KEY } });
