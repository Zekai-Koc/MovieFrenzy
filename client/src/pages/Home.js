import React, { useState } from "react";

import Header from "../components/Layout/Header";
import Movies from "../components/Movies/Movies";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

function Home() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const test = () => {
      fetch("http://localhost:5000/movies")
         .then((response) => response.json())
         .then((json) => console.log(json));
   };

   return (
      <CartProvider>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <button onClick={test}>TEST</button>
         <main>
            <Movies />
         </main>
      </CartProvider>
   );
}

export default Home;
