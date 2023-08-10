import React from "react";
import "./CartItem.css";
// const audioRemove = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const audioAdd = new Audio("https://www.fesliyanstudios.com/play-mp3/5451");

const CartItem = (props) => {
   const price = `$${props.price.toFixed(2)}`;

   const handleOnClickMinus = () => {
      // audioRemove.play();

      props.onRemove({
         name: props.name,
         price: props.price,
         amount: props.amount,
         id: props.id,
      });
   };

   const handleOnClickPlus = () => {
      // audioAdd.src = "https://www.fesliyanstudios.com/play-mp3/5451";
      // audioAdd.play();

      // setTimeout(() => {
      //    audioAdd.src = "";
      // }, 340);

      props.onAdd({
         name: props.name,
         price: props.price,
         amount: props.amount,
         id: props.id,
      });
   };

   return (
      <li className="cart-item">
         <div>
            <h3>{props.name}</h3>
            <div className="summary">
               <span className="price">{price}</span>
               <span className="amount">x {props.amount}</span>
            </div>
         </div>
         <div className="actions">
            <button onClick={handleOnClickMinus}>−</button>
            <button onClick={handleOnClickPlus}>+</button>
         </div>
      </li>
   );
};

export default CartItem;
