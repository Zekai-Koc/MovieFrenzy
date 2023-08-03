import React from "react";
import Card from "../UI/Card";
import MovieItem from "./MovieItem/MovieItem";
import "./AvailableMovies.css";
import useFetch from "../hooks/useFetch";

// const API_Key_TMDB = "api_key=58d61fb46bf00aad6d50930c6ad4e906";
// const baseUrlTMDB = `https://api.themoviedb.org/3/`;
// const discoverTMDB = `discover/movie?`;
// const discoverUrlTMDB = baseUrlTMDB + discoverTMDB + API_Key_TMDB;
const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";
// const searchUrlTMDB = `${baseUrlTMDB}search/movie?${API_Key_TMDB}&query=`;

const AvailableMovies = ({ searchItem }) => {
   const apiUrl = searchItem
      ? `http://localhost:5000/movies/search/${searchItem}`
      : "http://localhost:5000/movies";

   const { data, loading, error } = useFetch(apiUrl);

   if (loading) {
      return (
         <div className="status-message">
            <p>Loading...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="status-message error">
            <p>Error: {error.message}</p>
         </div>
      );
   }

   if (!data || !data.results || data.results.length === 0) {
      return (
         <div className="status-message">
            <p>No movies found.</p>
         </div>
      );
   }

   const moviesList = data.results.map((movie) => (
      <MovieItem
         key={movie.id}
         id={movie.id}
         name={movie.original_title}
         description={movie.overview.slice(0, 100) + "..."}
         price={movie.vote_average}
         poster={baseImgUrlTMDB + movie.poster_path}
      />
   ));

   return (
      <section className="movies">
         <Card>
            <ul>{moviesList}</ul>
         </Card>
      </section>
   );
};

export default AvailableMovies;
