import React, { useEffect, useState } from "react";
import Sale from "./Sale";
import useFetch from "../hooks/useFetch";
import getRandomSaleImage from "../../utils/getRandomSaleImage";
// import getRandomMoviePosterPath from "../../utils/getRandomMoviePosterPath";
import "./Banner.css";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";
const MIN_MOVIE_ID = 5;
// const MAX_MOVIE_ID = 1157079;
const MAX_MOVIE_ID = 11570;
const NUM_POSTERS_TO_GENERATE = 5;

const getRandomNumber = (minNumber, maxNumber) => {
   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const Banner = (props) => {
   const [saleObjects, setSaleObject] = useState([]);

   useEffect(() => {
      const fetchMovieData = async (movieId) => {
         try {
            const response = await fetch(
               `http://localhost:5000/movies/${movieId}`
            );
            const data = await response.json();
            return data;
         } catch (error) {
            console.error("Error fetching movie data:", error);
            return null;
         }
      };

      const fetchMovieWithValidPosterPath = async () => {
         const totalFiveSaleObjects = [];

         while (totalFiveSaleObjects.length < NUM_POSTERS_TO_GENERATE) {
            const randomMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);
            const data = await fetchMovieData(randomMovieId);

            if (data && data.poster_path) {
               const saleData = getRandomSaleImage();
               totalFiveSaleObjects.push({
                  movieData: data,
                  saleData,
               });
            }
         }
         setSaleObject(totalFiveSaleObjects);
      };

      fetchMovieWithValidPosterPath();
   }, []);

   return (
      <>
         <h1 className="heading-todays-offers">Unbeatable Deals!</h1>
         {saleObjects.map((singleObj, index) => (
            <Sale key={index} singleObj={singleObj} />
         ))}
         <h1 className="heading-todays-offers">Every Day!</h1>
      </>
   );
};

export default Banner;
