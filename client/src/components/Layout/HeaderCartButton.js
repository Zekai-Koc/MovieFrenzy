import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

   const numberOfCartItems = props.cartItems.length;

   const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;

   useEffect(() => {
      if (props.cartItems.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [props.cartItems]);

   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className="icon">
            <CartIcon />
         </span>
         <span>Movie Cart</span>
         <span className="badge">{numberOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;
