import React from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
   const hasItems = props.cartItems.length > 0;

   const cartItems = (
      <ul className="cart-items">
         {props.cartItems.map((item) => (
            <CartItem
               key={item.id}
               id={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onAdd={props.onAdd}
               onRemove={props.onRemove}
            />
         ))}
      </ul>
   );

   return (
      <Modal onClose={props.onClose}>
         {cartItems}
         <div className="total">
            <span>Total Amount</span>
            <span>{props.totalAmount.toFixed(2)}</span>
         </div>
         <div className="actions">
            <button className="button--alt" onClick={props.onClose}>
               Close
            </button>
            {hasItems && <button className="button">Order</button>}
         </div>
      </Modal>
   );
};

export default Cart;
