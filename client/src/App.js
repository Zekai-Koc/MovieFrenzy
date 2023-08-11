import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import DiscountedItem from "./pages/DiscountedItem";
import FilmStrip from "./pages/FilmStrip";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/discounts" element={<DiscountedItem />} />
            <Route path="/filmstrip" element={<FilmStrip />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>
      </Router>
   );
};

export default App;
