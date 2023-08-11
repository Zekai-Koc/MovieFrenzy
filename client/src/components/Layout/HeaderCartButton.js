import React, { useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useCartItems } from "../../store/CartContex";

const HeaderCartButton = (props) => {
   const { cartItems555 } = useCartItems();

   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

   const numberOfCartItems = cartItems555.length;

   const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;

   useEffect(() => {
      if (cartItems555.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [cartItems555]);

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
