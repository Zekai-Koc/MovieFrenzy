import React, { useState } from "react";

import MoviesSummary from "./WelcomeMessage";
import AvailableMovies from "./AvailableMovies";
import SearchMovie from "./MovieSearch/SearchMovie";

const Movies = () => {
   const [searchText, setSearchText] = useState("");

   const onSearchHandler = (searchText) => {
      setSearchText(searchText);
   };

   return (
      <>
         <MoviesSummary />
         <SearchMovie onSearch={onSearchHandler} />
         <AvailableMovies searchItem={searchText} />
      </>
   );
};

export default Movies;
