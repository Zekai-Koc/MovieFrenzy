import React from "react";
import useFetch from "../hooks/useFetch";

const MovieDetails = () => {
   const API_Key_TMDB = "api_key=58d61fb46bf00aad6d50930c6ad4e906";

   const url = `https://api.themoviedb.org/3/movie/343611?api_key=${API_Key_TMDB}`;

   const { data, loading, error } = useFetch("url");

   console.log(data);

   return (
      <div>
         <h1>MovieDetails</h1>
      </div>
   );
};

export default MovieDetails;
