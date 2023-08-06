import React, { useState } from "react";
import "./Movies.css";
import MovieSearch from "./MovieSearch/MovieSearc";
import MovieList from "./MovieList";
import { SearchProvider } from "../../store/SearchContext";

const Movies2 = ({ addToCart }) => {
   return (
      <SearchProvider>
         <div className="container-movies">
            <div className="container-movies-top">
               <MovieSearch />
            </div>
            <div className="container-movies-bottom">
               <MovieList addToCart={addToCart} />
            </div>
         </div>
      </SearchProvider>
   );
};

export default Movies2;
