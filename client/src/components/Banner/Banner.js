import React, { useEffect, useState } from "react";
import Sale from "./Sale";
import useFetch from "../hooks/useFetch";
import getRandomSaleImage from "../../utils/getRandomSaleImage";
// import getRandomMoviePosterPath from "../../utils/getRandomMoviePosterPath";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";
const MIN_MOVIE_ID = 5;
// const MAX_MOVIE_ID = 1157079;
const MAX_MOVIE_ID = 11570;
const NUM_POSTERS_TO_GENERATE = 5;

const getRandomNumber = (minNumber, maxNumber) => {
   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const Banner = (props) => {
   // const [randomSaleImage, setRandomSaleImage] = useState(getRandomSaleImage());
   // const [posterPaths, setPosterPaths] = useState([]);
   // const [saleImages, setSaleImages] = useState([]);

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
               const tempSaleObj = getRandomSaleImage();
               totalFiveSaleObjects.push({
                  posterPath: baseImgUrlTMDB + data.poster_path,
                  saleImage: tempSaleObj.saleImg,
                  totalSale: tempSaleObj.totalSale,
               });
            }
         }

         // setPosterPaths(validPosterPaths);
         // console.log(totalFiveSaleObjects);
         setSaleObject(totalFiveSaleObjects);
      };

      fetchMovieWithValidPosterPath();
   }, []);

   return (
      <>
         {saleObjects.map((singleObj, index) => (
            <Sale
               key={index}
               movieImage={singleObj.posterPath}
               saleImage={singleObj.saleImage}
               totalSale={singleObj.totalSale}
            />
         ))}
      </>
   );
};

export default Banner;

// // https://www.clipartmax.com/download/m2i8G6K9A0b1H7b1_81-used-auto-parts-recycling-10-off-clip-art/

// import React, { useEffect, useState } from "react";
// import Sale from "./Sale";
// import useFetch from "../hooks/useFetch";
// import getRandomSaleImage from "../../utils/getRandomSaleImage";
// import getRandomMoviePosterPath from "../../utils/getRandomMoviePosterPath";

// const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";
// const MIN_MOVIE_ID = 5;
// const MAX_MOVIE_ID = 1157079;

// const getRandomNumber = (minNumber, maxNumber) => {
//    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
// };

// const Banner = (props) => {
//    const [randomSaleImage, setRandomSaleImage] = useState(getRandomSaleImage());
//    const [movieData, setMovieData] = useState(null);
//    const randomMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);

//    const fetchMovieData = async (movieId) => {
//       try {
//          const response = await fetch(
//             `http://localhost:5000/movies/${movieId}`
//          );
//          const data = await response.json();
//          return data;
//       } catch (error) {
//          console.error("Error fetching movie data:", error);
//          return null;
//       }
//    };

//    const fetchMovieWithValidPosterPath = async (movieId) => {
//       const data = await fetchMovieData(movieId);
//       if (data && data.poster_path) {
//          setMovieData(data);
//       } else {
//          const newMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);
//          fetchMovieWithValidPosterPath(newMovieId);
//       }
//    };

//    useEffect(() => {
//       fetchMovieWithValidPosterPath(randomMovieId);
//    }, []);

//    const posterPath = movieData ? baseImgUrlTMDB + movieData.poster_path : "";

//    return (
//       <>
//          <Sale movieImage={posterPath} saleImage={randomSaleImage} />
//       </>
//    );
// };

// export default Banner;

// // import React, { useEffect, useState } from "react";
// // import Sale from "./Sale";
// // import useFetch from "../hooks/useFetch";
// // import getRandomSaleImage from "../../utils/getRandomSaleImage";
// // import getRandomMoviePosterPath from "../../utils/getRandomMoviePosterPath";

// // // const movieImage =
// // // "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg";

// // const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";

// // const getRandomNumber = (minNumber, maxNumber) => {
// //    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
// // };

// // const MIN_MOVIE_ID = 5;
// // const MAX_MOVIE_ID = 1157079;
// // const sampleValidMovieId = 298618;
// // let posterPath = "";
// // // const randomMovieId = getRandomNumber(5, 115707);

// // // Minimum movie ID: 5
// // // Maximum movie ID: 1157079

// // const Banner = (props) => {
// //    // const [randomMovieImage, setRandomMovieImage] = useState();
// //    const [randomSaleImage, setRandomSaleImage] = useState(getRandomSaleImage());
// //    const [movieData, setMovieData] = useState(null);

// //    const randomMovieId = getRandomNumber(MIN_MOVIE_ID, MAX_MOVIE_ID);

// // const { data, loading, error } = useFetch(
// //    `http://localhost:5000/movies/${randomMovieId}`
// // );

// // console.log("single movie data: ", data);

// // console.log("single movie  data.poster_path: ", data.poster_path);

// // if (data) {
// //    if (data.poster_path) {
// //       console.log("single movie  data.poster_path: ", data.poster_path);
// //       poster = baseImgUrlTMDB + data.poster_path;
// //    } else {
// //       poster =
// //          "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg";
// //    }
// // }

// //    useEffect(() => {
// //       const fetchMovieData = async () => {
// //          try {
// //             const response = await fetch(
// //                `http://localhost:5000/movies/${randomMovieId}`
// //             );
// //             const data = await response.json();
// //             setMovieData(data);
// //          } catch (error) {
// //             console.error("Error fetching movie data:", error);
// //          }
// //       };

// //       fetchMovieData();
// //    }, []);

// //    const posterPath = movieData ? baseImgUrlTMDB + movieData.poster_path : "";

// //    return (
// //       <>
// //          <Sale movieImage={posterPath} saleImage={randomSaleImage} />
// //       </>
// //    );
// // };

// // export default Banner;

// // import sale1 from "../../assets/badges/clipart1078766.png";
// // import sale2 from "../../assets/badges/clipart1159371.png";
// // import sale3 from "../../assets/badges/clipart1159382.png";
// // import sale4 from "../../assets/badges/clipart117123.png";
// // import sale5 from "../../assets/badges/clipart117136.png";
// // import sale6 from "../../assets/badges/clipart121739.png";
// // import sale7 from "../../assets/badges/clipart121753.png";
// // import sale8 from "../../assets/badges/clipart1306014.png";
// // import sale9 from "../../assets/badges/clipart1551381.png";
// // import sale10 from "../../assets/badges/clipart1612357.png";
// // import sale11 from "../../assets/badges/clipart1977310.png";
// // import sale12 from "../../assets/badges/clipart2374865.png";
// // import sale13 from "../../assets/badges/clipart2701605.png";
// // import sale14 from "../../assets/badges/clipart2894738.png";
// // import sale15 from "../../assets/badges/clipart3338721.png";
// // import sale16 from "../../assets/badges/clipart340525.png";
// // import sale17 from "../../assets/badges/clipart4214610.png";
// // import sale18 from "../../assets/badges/clipart4311983.png";
// // import sale19 from "../../assets/badges/clipart4443755.png";
// // import sale20 from "../../assets/badges/clipart4460733.png";
// // import sale21 from "../../assets/badges/clipart4587281.png";
// // import sale22 from "../../assets/badges/clipart701853.png";
// // import sale23 from "../../assets/badges/clipart805641.png";

// // const saleImages = [
// //    sale1,
// //    sale2,
// //    sale3,
// //    sale4,
// //    sale5,
// //    sale6,
// //    sale7,
// //    sale8,
// //    sale9,
// //    sale10,
// //    sale11,
// //    sale12,
// //    sale13,
// //    sale14,
// //    sale15,
// //    sale16,
// //    sale17,
// //    sale18,
// //    sale19,
// //    sale20,
// //    sale21,
// //    sale22,
// //    sale23,
// // ];

// // const randomSaleImage = () => {
// //    const randomIndex = Math.floor(Math.random() * saleImages.length);
// //    return saleImages[randomIndex];
// // };
