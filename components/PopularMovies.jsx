import { useState, useEffect } from "react";
import axios from "axios";
import MoviesGrid from "./MoviesGrid";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchPopular() {
      try {
        const res = await axios.get(
          "http://localhost:9090/api/tmdb/movies/popular",
        );
        setMovies(res.data.results);
      } catch (err) {
        setError("Unable to load popular movies");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPopular();
  }, []);
  if (isLoading) return <p>Loading popular movies...</p>;
  if (error) return <p>{error}</p>;
  return <MoviesGrid movies={movies} />;
}

export default PopularMovies;
