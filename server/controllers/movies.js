import fetch from "node-fetch";

const API_Key_TMDB = process.env.API_Key_TMDB;
const baseUrlTMDB = `https://api.themoviedb.org/3/`;
const discoverTMDB = `discover/movie?api_key=`;

// console.log("process.env.API_Key_TMDB ", process.env.API_Key_TMDB);

export const fetchData = async (url) => {
   console.log(url);
   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error(`Failed to fetch data from: ${url}`);
      }
      return await response.json();
   } catch (error) {
      // console.error("Error fetching data:", error);
      // throw error;
      res.status(500).json({ error: "Failed to fetch movies" });
   }
};

export const readMovies = async (req, res) => {
   try {
      const discoverUrlTMDB = `${baseUrlTMDB}${discoverTMDB}${API_Key_TMDB}`;

      const movies = await fetchData(discoverUrlTMDB);
      res.status(200).json(movies);
   } catch (error) {
      console.error("Error handling movies:", error);
      res.status(500).json({ error: "Failed to fetch movies" });
   }
};

export const searchMovies = async (req, res) => {
   try {
      const { searchtext } = req.params;
      // const { searchText } = req.body;
      console.log("search ", searchtext);

      const searchUrlTMDB = `${baseUrlTMDB}search/movie?api_key=${API_Key_TMDB}&query=${searchtext}`;

      // console.log(searchUrlTMDB);

      const movies = await fetchData(searchUrlTMDB);
      res.status(200).json(movies);
   } catch (error) {
      console.error("Error handling movies:", error);
      res.status(500).json({ error: "Failed to fetch movies" });
   }
};

export const getMovieById = async (req, res) => {
   try {
      const { id } = req.params;
      const movieUrl = `${baseUrlTMDB}movie/${id}?api_key=${API_Key_TMDB}`;

      const movie = await fetchData(movieUrl);
      console.log(movie);
      res.status(200).json(movie);
   } catch (error) {
      console.error("Error fetching movie by ID:", error);
      res.status(500).json({ error: "Failed to fetch movie by ID" });
   }
};
