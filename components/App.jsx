import Header from "./Header.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import LoginForm from "./LoginForm.jsx";
import PopularMovies from "./PopularMovies.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchResults from "./SearchResults.jsx";
import { Routes, Route } from "react-router-dom";

import "../src/App.css";

function App() {
  return (
    <>
      <Header />
      <SearchBar />

      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <RegistrationForm />
      <LoginForm />
    </>
  );
}

export default App;
