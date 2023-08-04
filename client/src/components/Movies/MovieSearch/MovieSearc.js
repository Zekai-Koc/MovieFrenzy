import React, { useState, useEffect } from "react";
import "./MovieSearch.css";

const MovieSearch = ({ onSearch }) => {
   const [searchText, setSearchText] = useState("");

   const onSubmitHandler = (event) => {
      event.preventDefault();
      onSearch(searchText);
   };

   return (
      <div className="wrapper-search2">
         <form className="search-form2" onSubmit={onSubmitHandler}>
            <input
               placeholder="Movie Name..."
               value={searchText}
               onChange={(event) => setSearchText(event.target.value)}
            />
            <button>Search</button>
         </form>
         <h1 className="search-title2">
            {searchText === "" ? "Popular Movies" : searchText}
         </h1>
      </div>
   );
};

export default MovieSearch;
