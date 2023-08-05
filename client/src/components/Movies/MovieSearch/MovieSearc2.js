import React, { useState, useEffect } from "react";
import "./MovieSearch2.css";

const MovieSearch2 = ({ onSearch }) => {
   const [searchText, setSearchText] = useState("");

   const onSubmitHandler = (event) => {
      event.preventDefault();
      onSearch(searchText);
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

export default MovieSearch2;
