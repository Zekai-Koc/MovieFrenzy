import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AddMovieAmountForm from "./AddMovieAmountForm";
import "./SingleMovie.css";
// import CartContext from "../../../store/cart_context";

const SingleMovie = (props) => {
   // const cartCtx = useContext(CartContext);

   const price = `$${props.price.toFixed(2)}`;
   const navigate = useNavigate();

   const addToCartHandler = (amount) => {
      // cartCtx.addItem({
      //    id: props.id,
      //    name: props.name,
      //    amount: amount,
      //    price: props.price,
      // });

      props.addToCart({
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
      <li className="list-item-single-movie">
         <div className="container-movie-props" onClick={handleClick}>
            <img className="poster" src={props.poster} alt={props.name} />
            <div className="container-movie-name-price">
               <h3>{props.name}</h3>
               <div className="price">{price}</div>
            </div>
            <div className="description">{props.description}</div>
         </div>
         {/* <div>
               <h4>{props.release}</h4>
               <p>Popularity: {props.popularity}</p>
            </div> */}
         <div className="container-add-movie-amount-form">
            <AddMovieAmountForm id={props.id} onAddToCart={addToCartHandler} />
         </div>
      </li>
   );
};

export default SingleMovie;
