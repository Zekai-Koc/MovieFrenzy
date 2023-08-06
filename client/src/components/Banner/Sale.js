import React from "react";
import "./Sale.css";

const Sale = (props) => {
   // console.log("Sale props: ", props);
   return (
      <div className="container-banner">
         <img
            src={props.movieImage}
            alt="movie in sale"
            className="banner-image"
         />
         <img src={props.saleImage} className="sale-image" alt="total sale" />
         <h3 className="total-discount">Total Discount: %${props.totalSale}</h3>
      </div>
   );
};

export default Sale;