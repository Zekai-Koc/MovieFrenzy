import express from "express";
import {
   readMovies,
   getMovieById,
   searchMovies,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", readMovies);
router.get("/search/:searchtext", searchMovies);
router.get("/:id", getMovieById);

export default router;
