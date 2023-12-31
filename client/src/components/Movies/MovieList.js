import React, { useContext, useState } from "react";
import SingleMovie from "./MovieItem/SingleMovie";
import "./MovieList.css";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../../store/SearchContext";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";

const MovieList = () => {
   const [searchTextContext, setSearchTextContext] = useContext(SearchContext);
   const [noMovieFound, setNoMovieFound] = useState(false);

   const apiUrl = searchTextContext
      ? `http://localhost:5000/movies/search/${searchTextContext}`
      : "http://localhost:5000/movies";

   const { data, loading, error } = useFetch(apiUrl);

   if (loading) {
      return (
         <div className="status-message">
            <p>Loading...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="status-message error">
            <p>Error: {error.message}</p>
            <p>Try reload the page.</p>
         </div>
      );
   }

   if (!data || !data.results || data.results.length === 0) {
      // setNoMovieFound(true);
      return (
         <div className="status-message">
            <p>No movies found.</p>
         </div>
      );
   }

   return (
      <section className="section-movie-list">
         <ul>
            {data.results.map((movie) => (
               <SingleMovie
                  key={movie.id}
                  id={movie.id}
                  name={
                     movie.original_title.length < 15
                        ? movie.original_title
                        : movie.original_title.slice(0, 19) + "..."
                  }
                  description={movie.overview.slice(0, 100) + "..."}
                  price={movie.vote_average}
                  poster={baseImgUrlTMDB + movie.poster_path}
                  release={movie.release_date}
                  popularity={movie.popularity}
               />
            ))}
         </ul>
      </section>
   );
};

export default MovieList;
