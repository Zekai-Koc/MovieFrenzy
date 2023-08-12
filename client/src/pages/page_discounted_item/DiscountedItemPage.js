import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DiscountedItemPage.css";
import AddMovieAmountForm from "../../components/Movies/MovieItem/AddMovieAmountForm";
import Header from "../../components/Layout/Header";
import Cart from "../../components/Cart/Cart";

const DiscountedItem = () => {
   const location = useLocation();
   // const { id } = useParams();

   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   // Access the props object passed from the Sale component
   const propsObjectFromSale = location.state;
   console.log(propsObjectFromSale);

   // Now you can access the data from the props object
   const movieData = propsObjectFromSale.movieData;
   const saleData = propsObjectFromSale.saleData;

   console.log(movieData);
   console.log(saleData);

   // Render your content using the data
   // ...

   const moviePrice = movieData.vote_average.toFixed(2); // just simulating. :)
   const totalDiscount = saleData.totalSale;
   const totalSave = ((moviePrice * saleData.totalSale) / 100).toFixed(2);
   const amountToPay = (moviePrice - totalSave).toFixed(2);

   return (
      <>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <div className="container-discount">
            <div className="container-saledata">
               <div className="container-saledata-image">
                  <img
                     className="saledata-image"
                     src={saleData.saleImg}
                     alt={"sale ratio"}
                  />
               </div>
               <div className="container-price-info">
                  <h1>Total price: ${moviePrice}</h1>
                  <h1>Your discount: %{totalDiscount}</h1>
                  <h2>Your will save total amount of ${totalSave}</h2>
                  <h1>You will pay: ${amountToPay}</h1>
               </div>
               <div className="addtocart-form">
                  <AddMovieAmountForm />
               </div>
            </div>

            <div className="container-moviedata">
               <div className="details-container">
                  <div className="details-header">
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={movieData.title}
                     />
                     <div className="details-info">
                        <h2>{movieData.title}</h2>
                        <p>Release Date: {movieData.release_date}</p>
                        <p>Runtime: {movieData.runtime} minutes</p>
                        <p>Rating: {movieData.vote_average}</p>
                        <p>
                           Genres:{" "}
                           {movieData.genres
                              .map((genre) => genre.name)
                              .join(", ")}
                        </p>
                        <p>Tagline: {movieData.tagline}</p>
                        <p>Language: {movieData.spoken_languages[0]?.name}</p>
                        <p>Homepage: {movieData.homepage}</p>
                        <p>IMDB ID: {movieData.imdb_id}</p>
                        <p>Original Language: {movieData.original_language}</p>
                        <p>Revenue: {movieData.revenue}</p>
                        <p>Vote Count: {movieData.vote_count}</p>
                     </div>
                  </div>
                  <div className="details-description">
                     <h3>Overview</h3>
                     <p>{movieData.overview}</p>
                  </div>
                  <div className="details-production">
                     <h3>Production Companies</h3>
                     <ul>
                        {movieData.production_companies.map((company) => (
                           <li key={company.id}>
                              {company.name} ({company.origin_country})
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="details-big-poster">
                     <h1>Poster</h1>
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={movieData.title}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DiscountedItem;
