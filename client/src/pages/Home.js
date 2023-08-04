import React, { useState, useEffect } from "react";

import Header from "../components/Layout/Header";
import Movies from "../components/Movies/Movies";
import Cart from "../components/Cart/Cart";
// import CartProvider from "../store/CartProvider";

// const checkExists = (itemList, item) => {
//    return
// }

function Home() {
   const [cartIsShown, setCartIsShown] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [totalAmount, setTotalAmount] = useState(0);

   useEffect(() => {
      setTotalAmount(
         cartItems.reduce((total, item) => {
            return total + item.price * item.amount;
         }, 0)
      );
      // console.log("cartItems: ", cartItems);
   }, [cartItems]);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const addToCart = (newItem) => {
      const cartItemIndex = cartItems.findIndex(
         (item) => item.id === newItem.id
      );

      const existingCartItem = cartItems[cartItemIndex];
      let updatedItems;

      if (existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
         };
         updatedItems = [...cartItems];
         updatedItems[cartItemIndex] = updatedItem;
      } else {
         updatedItems = cartItems.concat(newItem);
      }

      setCartItems(updatedItems);
   };

   const addCartHandler = (newItem) => {
      // console.log("newItem", newItem);
      const cartItemIndex = cartItems.findIndex(
         (item) => item.id === newItem.id
      );

      const existingCartItem = cartItems[cartItemIndex];
      let updatedItems;

      if (existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
         };
         updatedItems = [...cartItems];
         updatedItems[cartItemIndex] = updatedItem;
      } else {
         updatedItems = cartItems.concat(newItem);
      }

      setCartItems(updatedItems);
   };

   const removeCartHandler = (newItem) => {
      const existingCartItemIndex = cartItems.findIndex(
         (item) => item.id === newItem.id
      );
      const existingItem = cartItems[existingCartItemIndex];
      // const updatedTotalAmount = newItem.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
         updatedItems = cartItems.filter((item) => item.id !== newItem.id);
      } else {
         const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1,
         };
         updatedItems = [...cartItems];
         updatedItems[existingCartItemIndex] = updatedItem;
      }
      setCartItems(updatedItems);
   };

   return (
      <>
         {/* <CartProvider> */}
         {cartIsShown && (
            <Cart
               onClose={hideCartHandler}
               cartItems={cartItems}
               totalAmount={totalAmount}
               onAdd={addCartHandler}
               onRemove={removeCartHandler}
            />
         )}
         <Header onShowCart={showCartHandler} cartItems={cartItems} />
         <main>
            <Movies addToCart={addToCart} />
         </main>
         {/* </CartProvider> */}
      </>
   );
}

export default Home;
