import React, { useContext } from "react";
import MovieSearch from "./MovieSearc";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { SearchProvider, SearchContext } from "../../../store/SearchContext"; // Import the SearchProvider

describe("TEST-1: check if test file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: check <button> element", () => {
   it("renders MovieSearch component and checks for button element.", () => {
      render(
         <SearchProvider>
            <MovieSearch />
         </SearchProvider>
      );
      const buttonSearch = screen.getByRole("button");
      expect(buttonSearch).toBeInTheDocument();
   });
});

describe("TEST-3: check <input> element", () => {
   it("renders MovieSearch component and checks for input element and it's default value.", () => {
      render(
         <SearchProvider>
            <MovieSearch />
         </SearchProvider>
      );
      const inputElement = screen.getByRole("textbox");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toBeEmptyDOMElement();
   });
});

// Helper component that uses the context and renders the MovieSearch component
const TestComponent = () => {
   const [contextValue] = useContext(SearchContext);
   return <div data-testid="context-value">{contextValue}</div>;
};

describe("TEST-4: checks for the context when 'Search' button clicked.", () => {
   it("updates the context value when user enters text and presses 'Search' button", () => {
      render(
         <SearchProvider>
            <MovieSearch />
            <TestComponent />
         </SearchProvider>
      );

      const inputField = screen.getByPlaceholderText("Movie Name...");
      const searchButton = screen.getByText("Search");

      const searchText = "Home Alone";
      fireEvent.change(inputField, { target: { value: searchText } });
      fireEvent.click(searchButton);

      const contextValue = screen.getByTestId("context-value");
      expect(contextValue.textContent).toBe(searchText);
   });
});
