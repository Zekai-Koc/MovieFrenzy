// import React from "react";
// import useFetch from "../hooks/useFetch";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";

const getRandomNumber = (minNumber, maxNumber) => {
   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

// Minimum movie ID: 5
// Maximum movie ID: 1157079
const MIN_MOVIE_ID = 5;
const MAX_MOVIE_ID = 1157079;
const sampleValidMovieId = 298618;

let posterPath = "";

const fetchData = async () => {
   const randomMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);
   const url = `http://localhost:5000/movies/${randomMovieId}`;

   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log(">>>>>>>>>>> ", data);
      return await data.poster_path;
   } catch (error) {
      return "";
   }
};

const getRandomMoviePosterPath = async () => {
   let validData = false;

   while (!validData) {
      posterPath = await fetchData();
      if (posterPath !== "") validData = true;
   }

   console.log("posterPath ", posterPath);
   return posterPath + baseImgUrlTMDB;
};

export default getRandomMoviePosterPath;
