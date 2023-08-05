import React, { useState } from "react";
import "./Movies2.css";
import MovieSearch2 from "./MovieSearch/MovieSearc2";
import MovieList from "./MovieList";

const Movies2 = ({ addToCart }) => {
   const [searchText, setSearchText] = useState("");

   const onSearchHandler = (searchText) => {
      console.log(searchText);
      setSearchText(searchText);
   };

   return (
      <div className="container-movies">
         <div className="container-movies-top">
            <MovieSearch2 onSearch={onSearchHandler} />
         </div>
         <div className="container-movies-bottom">
            <MovieList onSearch={searchText} addToCart={addToCart} />
         </div>
      </div>
   );
};

export default Movies2;
