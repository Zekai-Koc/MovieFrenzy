import React from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";
import { useCartItems } from "../../store/CartContex";

const Cart = (props) => {
   const { cartItems555, totalPrice } = useCartItems();

   const hasItems = cartItems555.length > 0;

   const cartItems = (
      <ul className="cart-items">
         {cartItems555.map((item) => (
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
            <span>Total Price</span>
            <span>{totalPrice ? "$" + totalPrice.toFixed(2) : "$0.00"}</span>
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
