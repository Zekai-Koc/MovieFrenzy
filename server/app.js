import "dotenv/config";
import express from "express";
import cors from "cors";
import moviesRoutes from "./routes/movies.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRoutes);

export default app;
