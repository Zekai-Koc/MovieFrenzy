import React from "react";
import "./CartItem.css";
import { useCartItems } from "../../store/CartContex";

const CartItem = (props) => {
   const { addCartItem, removeCartItem } = useCartItems();

   const price = `$${props.price.toFixed(2)}`;

   const handleOnClickMinus = () => {
      removeCartItem({
         id: props.id,
         name: props.name,
         amount: props.amount,
         price: props.price,
      });
   };

   const handleOnClickPlus = () => {
      addCartItem({
         id: props.id,
         name: props.name,
         amount: props.amount,
         price: props.price,
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
