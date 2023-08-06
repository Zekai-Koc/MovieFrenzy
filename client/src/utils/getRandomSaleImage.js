import sale1 from "../assets/badges/clipart1078766.png"; // 90%
import sale2 from "../assets/badges/clipart1159371.png"; // 25%
import sale3 from "../assets/badges/clipart1159382.png"; // 13%
import sale4 from "../assets/badges/clipart117123.png"; // 18%
import sale5 from "../assets/badges/clipart117136.png"; // 23%
import sale6 from "../assets/badges/clipart121739.png"; // 95%
import sale7 from "../assets/badges/clipart121753.png"; // 66%
import sale8 from "../assets/badges/clipart1306014.png"; // 86%
import sale9 from "../assets/badges/clipart1551381.png"; // 65%
import sale10 from "../assets/badges/clipart1612357.png"; // $4.99
import sale11 from "../assets/badges/clipart1977310.png"; // 60%
import sale12 from "../assets/badges/clipart2374865.png"; // 50%
import sale13 from "../assets/badges/clipart2701605.png"; // 75%
import sale14 from "../assets/badges/clipart2894738.png"; // 55%
import sale15 from "../assets/badges/clipart3338721.png"; // 40%
import sale16 from "../assets/badges/clipart340525.png"; // 75%
import sale17 from "../assets/badges/clipart4214610.png"; // 75%
import sale18 from "../assets/badges/clipart4311983.png"; // 25%
import sale19 from "../assets/badges/clipart4443755.png"; // 99%
import sale20 from "../assets/badges/clipart4460733.png"; // 30%
import sale21 from "../assets/badges/clipart4587281.png"; // 75%
import sale22 from "../assets/badges/clipart701853.png"; // 10%
import sale23 from "../assets/badges/clipart805641.png"; // 50%

const saleImages = [
   { saleImg: sale1, totalSale: "90" },
   { saleImg: sale2, totalSale: "25" },
   { saleImg: sale3, totalSale: "13" },
   { saleImg: sale4, totalSale: "18" },
   { saleImg: sale5, totalSale: "23" },
   { saleImg: sale6, totalSale: "95" },
   { saleImg: sale7, totalSale: "66" },
   { saleImg: sale8, totalSale: "86" },
   { saleImg: sale9, totalSale: "65" },
   { saleImg: sale10, totalSale: "45" },
   { saleImg: sale11, totalSale: "60" },
   { saleImg: sale12, totalSale: "50" },
   { saleImg: sale13, totalSale: "75" },
   { saleImg: sale14, totalSale: "55" },
   { saleImg: sale15, totalSale: "40" },
   { saleImg: sale16, totalSale: "75" },
   { saleImg: sale17, totalSale: "75" },
   { saleImg: sale18, totalSale: "25" },
   { saleImg: sale19, totalSale: "99" },
   { saleImg: sale20, totalSale: "30" },
   { saleImg: sale21, totalSale: "75" },
   { saleImg: sale22, totalSale: "10" },
   { saleImg: sale23, totalSale: "50" },
];

const getRandomSaleImage = () => {
   const randomIndex = Math.floor(Math.random() * saleImages.length);
   return saleImages[randomIndex];
};

export default getRandomSaleImage;
