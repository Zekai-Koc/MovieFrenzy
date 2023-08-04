import React, { useState, useEffect } from "react";
import "./SearchMovie.css";

const SearchMovie = ({ onSearch }) => {
   const [searchText, setSearchText] = useState("");
   // const [formTitle, setFormTitle] = useState("Popular Movies");

   const onSubmitHandler = (event) => {
      event.preventDefault();
      onSearch(searchText);
      // setSearchText("");
   };

   useEffect(() => {
      // setFormTitle(searchText);
      // console.log(searchText.length);
      // if (searchText.length > 3) onSearch(searchText);
   }, [searchText]);

   return (
      <div className="wrapper-search">
         <form className="search-form" onSubmit={onSubmitHandler}>
            <input
               placeholder="Movie Name..."
               // value={searchText}
               onChange={(event) => setSearchText(event.target.value)}
            />
            <button>Search</button>
         </form>
         <h3 className="search-title">Movies: ... </h3>
      </div>
   );
};

export default SearchMovie;
