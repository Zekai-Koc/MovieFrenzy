import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/page_home/Home";
import Details from "./pages/page_details/Details";
import DiscountedItemPage from "./pages/page_discounted_item/DiscountedItemPage";
import FilmStrip from "./pages/page_film_strip/FilmStrip";
import FavoritesPage from "./pages/page_favorites/FavoritesPage";
import AboutPage from "./pages/page_about/AboutPage";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/discounts" element={<DiscountedItemPage />} />
            <Route path="/filmstrip" element={<FilmStrip />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>
      </Router>
   );
};

export default App;
