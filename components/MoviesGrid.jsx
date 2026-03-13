function MoviesGrid({ movies }) {
  return (
    <div style={styles.grid}>
      {movies.map((movie) => (
        <div key={movie.id} style={styles.card}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={styles.poster}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "1rem",
  },
  card: {
    textAlign: "center",
  },
  poster: {
    width: "100%",
    borderRadius: "8px",
  },
};
export default MoviesGrid;
