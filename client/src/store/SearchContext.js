import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
   const [searchTextContext, setSearchTextContext] = useState("");

   return (
      <SearchContext.Provider value={[searchTextContext, setSearchTextContext]}>
         {props.children}
      </SearchContext.Provider>
   );
};
