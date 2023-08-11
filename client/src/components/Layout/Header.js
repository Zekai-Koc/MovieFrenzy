import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from "./Navigation";

import "./Header.css";

const Header = (props) => {
   return (
      <header className="header">
         <div className="header-left">
            <h1>Movie Frenzy</h1>
            <HeaderCartButton
               onClick={props.onShowCart}
               data-testid="header-cart-button"
            />
         </div>
         <div className="navigation-container">
            <Navigation />
         </div>
      </header>
   );
};

export default Header;
