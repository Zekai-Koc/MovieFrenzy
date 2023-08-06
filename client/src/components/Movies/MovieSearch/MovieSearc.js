import React, { useState, useContext } from "react";
import "./MovieSearch.css";
import { SearchContext } from "../../../store/SearchContext";

const MovieSearch = () => {
   const [searchText, setSearchText] = useState("");

   const [searchTextContext, setSearchTextContext] = useContext(SearchContext);
   console.log("inside movie search: ", searchTextContext);

   const onSubmitHandler = (event) => {
      event.preventDefault();
      // onSearch(searchText);
      setSearchTextContext(searchText);
   };

   return (
      <div className="container-movie-search">
         <form onSubmit={onSubmitHandler}>
            <input
               placeholder="Movie Name..."
               value={searchText}
               onChange={(event) => setSearchText(event.target.value)}
            />
            <button>Search</button>
         </form>
         <h3>{searchText === "" ? "Popular Movies" : searchText}</h3>
      </div>
   );
};

export default MovieSearch;
