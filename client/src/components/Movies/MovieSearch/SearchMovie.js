import React, { useState } from "react";
import "./SearchMovie.css";

const SearchMovie = ({ onSearch }) => {
   const [searchText, setSearchText] = useState("");

   const onSubmitHandler = (event) => {
      event.preventDefault();
      onSearch(searchText);
   };

   return (
      <form className="search-form" onSubmit={onSubmitHandler}>
         <input
            placeholder="Movie Name..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
         />
         <button>Search</button>
      </form>
   );
};

export default SearchMovie;
