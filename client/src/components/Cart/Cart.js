import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";
// import CartContext from "../../store/cart_context";

const Cart = (props) => {
   // const cartCtx = useContext(CartContext);

   // console.log("kkkk", props.cartItems);

   // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   // const hasItems = cartCtx.items.length > 0;

   // const totalAmount = `$${props.cartItems.totalAmount.toFixed(2)}`;
   const hasItems = props.cartItems.length > 0;

   const cartItemRemoveHandler = (id) => {
      // cartCtx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      // cartCtx.addItem({ ...item, amount: 1 });
   };

   const cartItems = (
      <ul className="cart-items">
         {/* {cartCtx.items.map((item) => ( */}
         {props.cartItems.map((item) => (
            <CartItem
               // key={item.id + Math.floor(Math.random() * 10000000)}
               key={item.id}
               // key={uuidv4()}
               id={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onAdd={props.onAdd}
               onRemove={props.onRemove}
               // onRemove={cartItemRemoveHandler.bind(null, item.id)}
               // onAdd={cartItemAddHandler.bind(null, item)}
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
