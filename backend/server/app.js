import express from "express";
const app = express();
import cors from "cors";

import tmdbRoutes from "./routes/tmdb.js";

const TMDB_KEY = process.env.TMDB_API_KEY;
app.use(cors());
app.use(express.json());
app.use("/api/tmdb", tmdbRoutes);
console.log("TMDB router mounted!");
app.post("/", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World!" });
});
console.log("TMDB key loaded:", process.env.TMDB_API_KEY);

export default app;
