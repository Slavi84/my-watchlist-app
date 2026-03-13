import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!query) return;

    async function fetchResults() {
      try {
        const res = await axios.get(
          `http://localhost:9090/api/search/movies?q=${query}`,
        );
        setResults(res.data.results || []);
      } catch (err) {
        console.error("Search failed:", err);
      }
    }

    fetchResults();
  }, [query]);

  return (
    <div>
      <h2>Results for "{query}"</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
