import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Movies from "../../components/Movies/Movies";
import Cart from "../../components/Cart/Cart";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

function Home() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   return (
      <div data-testid="home-page">
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCartHandler} />
         <div className="container-main-body">
            <div className="container-main--left">
               <Banner />
            </div>
            <div className="container-main--right">
               <Movies />
            </div>
         </div>
      </div>
   );
}

export default Home;
