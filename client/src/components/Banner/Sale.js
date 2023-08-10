import React from "react";
import "./Sale.css";
import { useNavigate } from "react-router-dom";

const baseImgUrlTMDB = "https://image.tmdb.org/t/p/w500";

const Sale = (props) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (props.singleObj) {
         navigate("/discounts", { state: props.singleObj });
      } else {
         console.error("props.singleObj is null or undefined");
      }
   };
   return (
      <div className="container-banner" onClick={handleClick}>
         <img
            src={`${baseImgUrlTMDB}${props.singleObj.movieData.poster_path}`}
            alt="movie in sale"
            className="banner-image"
         />
         <div className="image-container">
            <img
               src={`${props.singleObj.saleData.saleImg}`}
               className="sale-image"
               alt="total sale"
            />
         </div>
         <h3 className="total-discount">
            Total Discount: %${`${props.singleObj.saleData.totalSale}`}
         </h3>
      </div>
   );
};

export default Sale;
