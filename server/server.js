import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Sample movie data to simulate response
const movies = [
   { id: 1, title: "Movie 1", rating: 8.5 },
   { id: 2, title: "Movie 2", rating: 9.0 },
   // Add more movie data as needed
];

app.get("/", (req, res) => {
   console.log(movies);
   res.send(movies);
});
// Sample route to get movie details by ID
app.get("/api/movies/:id", (req, res) => {
   const movieId = parseInt(req.params.id);
   const movie = movies.find((movie) => movie.id === movieId);
   if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
   }
   console.log(movie);
   res.json(movie);
});

const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
