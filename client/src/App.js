import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Discounts from "./pages/Discounts";
import FilmStrip from "./pages/FilmStrip";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/filmstrip" element={<FilmStrip />} />
         </Routes>
      </Router>
   );
};

export default App;
