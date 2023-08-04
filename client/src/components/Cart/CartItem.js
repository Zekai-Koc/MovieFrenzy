import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
   const price = `$${props.price.toFixed(2)}`;

   const handleOnClickMinus = () => {
      props.onRemove({
         name: props.name,
         price: props.price,
         amount: props.amount,
         id: props.id,
      });
   };

   const handleOnClickPlus = () => {
      // console.log("kkkkk ", props.id);

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
