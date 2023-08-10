import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../assets/summer-movies-1587392939.jpg";
import { useNavigate } from "react-router-dom"; // Only import useNavigate

import "./Header.css";

const Header = (props) => {
   const navigate = useNavigate();

   const clickHandler = () => {
      navigate("/filmstrip");
   };

   return (
      <header className="header">
         <h1>Movie Frenzy</h1>
         <button
            className="button-film-strip"
            onClick={clickHandler}
            // disabled={true}
         >
            Film Strip
         </button>
         <HeaderCartButton
            onClick={props.onShowCart}
            cartItems={props.cartItems}
            data-testid="header-cart-button"
         />
      </header>
   );
};

export default Header;

// import React from "react";
// import HeaderCartButton from "./HeaderCartButton";
// import headerImage from "../../assets/summer-movies-1587392939.jpg";
// import { useNavigate } from "react-router-dom";

// import "./Header.css";

// const Header = (props) => {
//    const navigate = useNavigate();

//    const clickHandler = () => {
//       navigate("/filmstrip");
//    };

//    return (
//       <>
//          <header className="header">
//             <h1>Movie Frenzy</h1>
//             <button
//                className="button-film-strip"
//                onClick={clickHandler}
//                disabled={true}
//             >
//                Film Strip
//             </button>
//             <HeaderCartButton
//                onClick={props.onShowCart}
//                cartItems={props.cartItems}
//                data-testid="header-cart-button"
//             />
//          </header>
//       </>
//    );
// };

// export default Header;
