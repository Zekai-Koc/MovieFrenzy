import React from "react";
import { useNavigate } from "react-router-dom";
import AddMovieAmountForm from "./AddMovieAmountForm";
import "./SingleMovie.css";
import heartRegular from "../../../assets/favorite_images/heart-regular.svg";
import heartSolid from "../../../assets/favorite_images/heart-solid.svg";
import { useFavorites } from "../../../store/FavoritesContext";
import { useCartItems } from "../../../store/CartContex";

const SingleMovie = (props) => {
   const { addFavorite, removeFavorite, isFavorite } = useFavorites();
   const { addCartItem } = useCartItems();

   const price = `$${props.price.toFixed(2)}`;
   const navigate = useNavigate();

   const addToCartHandler = (amount) => {
      addCartItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };

   const handleClick = () => {
      navigate(`/details/${props.id}`);
   };

   const handleFavoriteClick = () => {
      if (isFavorite(props.id)) {
         removeFavorite(props.id);
      } else {
         addFavorite(props.id);
      }
   };

   return (
      <li className="list-item-single-movie" data-testid="movie-container">
         <div className="container-movie-props" onClick={handleClick}>
            <img className="poster" src={props.poster} alt={props.name} />
            <div className="container-movie-name-price">
               <h3>{props.name}</h3>
               <div className="price">{price}</div>
            </div>
            <div className="description">{props.description}</div>
         </div>
         <div className="container-add-movie-amount-form">
            <AddMovieAmountForm id={props.id} onAddToCart={addToCartHandler} />
         </div>
         <div className="container-favorite-image">
            {isFavorite(props.id) ? (
               <img
                  src={heartSolid}
                  alt="heart favorite"
                  className="image-heart-solid"
                  onClick={handleFavoriteClick}
               />
            ) : (
               <img
                  src={heartRegular}
                  alt="heart favorite"
                  className="image-heart-solid"
                  onClick={handleFavoriteClick}
               />
            )}
         </div>
      </li>
   );
};

export default SingleMovie;
