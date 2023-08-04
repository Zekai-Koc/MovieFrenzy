import React, { useState } from "react";

import MoviesSummary from "./WelcomeMessage";
import AvailableMovies from "./AvailableMovies";
// import SearchMovie from "./MovieSearch/SearchMovie";
import MovieSearch from "./MovieSearch/MovieSearc";

const Movies = ({ addToCart }) => {
   const [searchText, setSearchText] = useState("");

   const onSearchHandler = (searchText) => {
      console.log(searchText);
      setSearchText(searchText);
   };

   // const onAddCart = (rrr) => {
   //    console.log(rrr);
   // };

   return (
      <>
         {/* <MoviesSummary /> */}
         {/* <SearchMovie onSearch={onSearchHandler} /> */}
         {/* <AvailableMovies searchItem={searchText} /> */}
         <MovieSearch onSearch={onSearchHandler} />
         <AvailableMovies onSearch={searchText} addToCart={addToCart} />
      </>
   );
};

export default Movies;
