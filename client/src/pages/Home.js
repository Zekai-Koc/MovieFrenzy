import React, { useState, useEffect } from "react";

import Header from "../components/Layout/Header";
import Movies from "../components/Movies/Movies";
import Cart from "../components/Cart/Cart";
import Banner from "../components/Banner/Banner";
import "./Home.css";

const cartUtil = (itemList, newItem, operation) => {
   const cartItemIndex = itemList.findIndex((item) => item.id === newItem.id);

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
   }, [cartItems]);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const addToCart = (newItem) => {
      setCartItems(cartUtil(cartItems, newItem, "ADD"));
   };

   const addCartHandler = (newItem) => {
      setCartItems(cartUtil(cartItems, newItem, "ADD"));
   };

   const removeCartHandler = (newItem) => {
      setCartItems(cartUtil(cartItems, newItem, "REMOVE"));
   };

   return (
      <div>
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

         <div className="container-main-body">
            <div className="container-main--left">
               <Banner />
            </div>
            <div className="container-main--right">
               <Movies addToCart={addToCart} />
            </div>
         </div>
      </div>
   );
}

export default Home;
