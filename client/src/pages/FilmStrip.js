import React, { useState, useEffect, useRef } from "react";
import "./FilmStrip.css";
import useFetch from "../components/hooks/useFetch";
import film_strip_two from "../assets/filmstrip/film_strip_two.webp";
import film_strip2 from "../assets/filmstrip/film-strip-vector-free.png";

const FilmStrip = () => {
   const [posterPath, setPosterPath] = useState("");
   const [validData, setValidData] = useState(false);

   const fetchMovieData = async (movieUrl) => {
      try {
         const response = await fetch(movieUrl);
         if (!response.ok) {
            throw new Error("Network response was not ok!");
         }
         const data = await response.json();
         console.log("Data: ", await data);
         return data;
      } catch (error) {
         // console.log("errorrrrrrr");
         return null;
      }
   };

   const fetchMovie = async () => {
      const tempMovieId = Math.floor(Math.random() * 10000) + 5;
      const url = `http://localhost:5000/movies/${tempMovieId}`;

      const tempMovieData = await fetchMovieData(url);
      if (tempMovieData !== null) {
         setValidData(true);
         console.log(tempMovieData);
      } else {
         setValidData(false);
         console.log("not valid data");
      }
   };

   useEffect(() => {
      const fetchDataLoop = async () => {
         while (!validData) {
            await fetchMovie();
            await new Promise((resolve) => setTimeout(resolve, 1000));
         }
      };

      fetchDataLoop();
   }, []);

   return (
      <div className="container-filmstrip">
         <img className="image-filmstrip" src={film_strip2} alt="film strip" />
         <img
            className="image-filmstrip-movie1"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie2"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie3"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie4"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie5"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie6"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie7"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie8"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie9"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie10"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
         <img
            className="image-filmstrip-movie11"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="film strip"
         />
      </div>
   );
};

export default FilmStrip;
