import { config as configDotenv } from "dotenv";
configDotenv();

import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_KEY = process.env.TMDB_API_KEY;

console.log("TMDB_KEY inside tmdb.js:", TMDB_KEY);
//Search tv shows
router.get("/search/tv", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get("https://api.themoviedb.org/3/search/tv", {
      params: { api_key: TMDB_KEY, query },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "TMDB search failed" });
  }
});
//Search movies
router.get("/search/movies", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: { api_key: TMDB_KEY, query },
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "TMDB movie search failed" });
  }
});
//get tv details
router.get("/tv/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: { api_key: TMDB_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "TMDB TV details failed" });
  }
});
//Get movie images
router.get("/movie/:id/images", async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      { params: { api_key: TMDB_KEY } },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load images" });
  }
});

//get movie details
router.get("/movie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      { params: { api_key: TMDB_KEY } },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "TMDB movie details failed" });
  }
});
//Get movie cast
router.get("/movie/:id/credits", async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      { params: { api_key: TMDB_KEY } },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie credits" });
  }
});
//Get popular movies
router.get("/movies/popular", async (req, res) => {
  const page = req.query.page || 1;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      { params: { api_key: TMDB_KEY }, page },
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load popular movies" });
  }
});
router.get("/test", (req, res) => {
  res.send("TMDB router is working");
});

export default router;
