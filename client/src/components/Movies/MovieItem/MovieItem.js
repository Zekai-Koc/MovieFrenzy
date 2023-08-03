import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MovieItemForm from "./MovieItemForm";
import "./MovieItem.css";
import CartContext from "../../../store/cart_context";

const MovieItem = (props) => {
   const cartCtx = useContext(CartContext);

   const price = `$${props.price.toFixed(2)}`;
   const navigate = useNavigate();
   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };

   const handleClick = () => {
      navigate(`/details/${props.id}`);
   };

   return (
      <li>
         <div className="movie">
            <div className="wrapper-movie-item" onClick={handleClick}>
               <img className="poster" src={props.poster} alt={props.name} />
               <div className="wrapper-movie-name-price">
                  <h3>{props.name}</h3>
                  <div className="price">{price}</div>
               </div>
               <div className="description">{props.description}</div>
            </div>
            <div>
               <MovieItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
         </div>
      </li>
   );
};

export default MovieItem;
