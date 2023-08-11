import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
   return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
   const [favorites, setFavorites] = useState([]);

   const addFavorite = (productId) => {
      setFavorites((prevFavorites) => [...prevFavorites, productId]);
   };

   const removeFavorite = (productId) => {
      setFavorites((prevFavorites) =>
         prevFavorites.filter((id) => id !== productId)
      );
   };

   const isFavorite = (productId) => {
      return favorites.includes(productId);
   };

   return (
      <FavoritesContext.Provider
         value={{ favorites, addFavorite, removeFavorite, isFavorite }}
      >
         {children}
      </FavoritesContext.Provider>
   );
}
