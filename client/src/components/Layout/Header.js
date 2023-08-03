import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../assets/summer-movies-1587392939.jpg";

import "./Header.css";

const Header = (props) => {
   return (
      <>
         <header className="header">
            <h1>Movie Frenzy</h1>
            <HeaderCartButton onClick={props.onShowCart} />
         </header>
         <div className="main-image">
            <img src={headerImage} alt="Cinema curtain!" />
         </div>
      </>
   );
};

export default Header;
