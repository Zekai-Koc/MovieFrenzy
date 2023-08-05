import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import SingleMovie from "./MovieItem/SingleMovie";
import "./MovieList.css";
import useFetch from "../hooks/useFetch";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ onSearch, addToCart }) => {
   const [searchText, setSearchText] = useState(onSearch);

   useEffect(() => {
      setSearchText(onSearch);
   }, [onSearch]);

   const apiUrl = searchText
      ? `http://localhost:5000/movies/search/${searchText}`
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

   return (
      <section className="section-movie-list">
         <ul>
            {data.results.map((movie) => (
               <SingleMovie
                  key={movie.id}
                  id={movie.id}
                  name={
                     movie.original_title.length < 15
                        ? movie.original_title
                        : movie.original_title.slice(0, 15) + "..."
                  }
                  description={movie.overview.slice(0, 40) + "..."}
                  price={movie.vote_average}
                  poster={baseImgUrlTMDB + movie.poster_path}
                  release={movie.release_date}
                  popularity={movie.popularity}
                  addToCart={addToCart}
               />
            ))}
         </ul>
      </section>
   );
};

export default MovieList;
