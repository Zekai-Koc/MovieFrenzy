import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import { SearchContext } from "../../store/SearchContext";
import useFetch from "../hooks/useFetch"; // Import the useFetch hook
import { act } from "react-dom/test-utils";

// Mock the useFetch hook
jest.mock("../hooks/useFetch");

describe("MovieList", () => {
   const mockSearchValue = "Mocked Search Text";
   const mockSetSearchText = jest.fn();

   it("renders a list of movies", async () => {
      const mockMovieData = {
         results: [
            // Provide mock movie data here
         ],
      };

      // Mock the useFetch hook to return the mockMovieData
      useFetch.mockReturnValue({
         data: mockMovieData,
         loading: false,
         error: null,
      });

      await act(async () => {
         render(
            <SearchContext.Provider
               value={[mockSearchValue, mockSetSearchText]}
            >
               <MovieList />
            </SearchContext.Provider>
         );
      });

      // Perform assertions to check if movie data is being displayed correctly
   });

   it("renders loading message while fetching data", async () => {
      // Mock the useFetch hook to return loading state
      useFetch.mockReturnValue({ loading: true });

      await act(async () => {
         render(
            <SearchContext.Provider
               value={[mockSearchValue, mockSetSearchText]}
            >
               <MovieList />
            </SearchContext.Provider>
         );
      });

      // Perform assertions to check if loading message is displayed
   });

   it("renders error message when fetch fails", async () => {
      const mockErrorMessage = "Mocked Error Message";

      // Mock the useFetch hook to return error state
      useFetch.mockReturnValue({ error: new Error(mockErrorMessage) });

      await act(async () => {
         render(
            <SearchContext.Provider
               value={[mockSearchValue, mockSetSearchText]}
            >
               <MovieList />
            </SearchContext.Provider>
         );
      });

      // Perform assertions to check if error message is displayed
   });
});
