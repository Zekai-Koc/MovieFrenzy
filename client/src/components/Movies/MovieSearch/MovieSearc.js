import React, { useState, useContext } from "react";
import "./MovieSearch.css";
import { SearchContext } from "../../../store/SearchContext";

const MovieSearch = () => {
   const [searchText, setSearchText] = useState("");

   const [searchTextContext, setSearchTextContext] = useContext(SearchContext);

   const onSubmitHandler = (event) => {
      event.preventDefault();
      setSearchTextContext(searchText);
   };

   const handleChange = (event) => {
      setSearchText(event.target.value);
   };

   return (
      <div
         className="container-movie-search"
         data-testid="search-context-value"
      >
         <form onSubmit={onSubmitHandler}>
            <input
               placeholder="Movie Name..."
               value={searchText}
               onChange={handleChange}
            />
            <button>Search</button>
         </form>
         {/* <h3>{searchText === "" ? "Popular Movies" : searchText}</h3> */}
      </div>
   );
};

export default MovieSearch;
