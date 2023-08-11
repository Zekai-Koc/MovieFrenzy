import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCartItems() {
   return useContext(CartContext);
}

export function CartItemsProvider({ children }) {
   const [cartItems555, setCartItems] = useState([]);
   const [totalPrice, setTotalPrice] = useState("");

   const calculateTotalPrice = (items) => {
      const updatedTotalPrice = items.reduce((total, item) => {
         return total + item.price * item.amount;
      }, 0);
      setTotalPrice(updatedTotalPrice);
   };

   const cartUtil = (itemList, newItem, operation) => {
      const cartItemIndex = itemList.findIndex(
         (item) => item.id === newItem.id
      );
      const existingCartItem = itemList[cartItemIndex];
      let updatedItems;

      if (operation === "ADD") {
         if (existingCartItem) {
            const updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + 1,
            };
            updatedItems = [...itemList];
            updatedItems[cartItemIndex] = updatedItem;
         } else {
            updatedItems = itemList.concat(newItem);
         }
      } else if (operation === "REMOVE") {
         if (existingCartItem.amount === 1) {
            updatedItems = itemList.filter((item) => item.id !== newItem.id);
         } else {
            const updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount - 1,
            };
            updatedItems = [...itemList];
            updatedItems[cartItemIndex] = updatedItem;
         }
      }
      return updatedItems;
   };

   const addCartItem = (item) => {
      const updatedCartItems = cartUtil(cartItems555, item, "ADD");
      setCartItems(updatedCartItems);
      calculateTotalPrice(updatedCartItems);
   };

   const removeCartItem = (item) => {
      const updatedCartItems = cartUtil(cartItems555, item, "REMOVE");
      setCartItems(updatedCartItems);
      calculateTotalPrice(updatedCartItems);
   };

   return (
      <CartContext.Provider
         value={{
            cartItems555,
            totalPrice,
            addCartItem,
            removeCartItem,
         }}
      >
         {children}
      </CartContext.Provider>
   );
}
