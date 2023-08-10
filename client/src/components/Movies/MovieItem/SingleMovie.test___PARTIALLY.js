import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleMovie from "./SingleMovie";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter, useNavigate } from "react-router-dom"; // Import MemoryRouter as well

jest.mock("react-router-dom", () => {
   const originalModule = jest.requireActual("react-router-dom");
   return {
      ...originalModule,
      useNavigate: jest.fn(),
   };
});

describe("SingleMovie", () => {
   const mockMovie = {
      id: "1",
      name: "Movie 1",
      price: 9.99,
      poster: "movie-poster-url",
      description: "Movie description",
   };

   it("renders movie details correctly", () => {
      render(<SingleMovie {...mockMovie} />);
      const nameElement = screen.getByText("Movie 1");
      const priceElement = screen.getByText("$9.99");
      const descriptionElement = screen.getByText("Movie description");

      expect(nameElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
   });

   it("calls onAddToCart when form is submitted", () => {
      const onAddToCartMock = jest.fn();
      render(<SingleMovie {...mockMovie} addToCart={onAddToCartMock} />);
      const addButton = screen.getByRole("button", { name: "+ Add" });

      fireEvent.click(addButton);

      expect(onAddToCartMock).toHaveBeenCalledWith({
         id: "1",
         name: "Movie 1",
         amount: 1, // Adjust this if your component behavior changes
         price: 9.99,
      });
   });

   // it("navigates to details page when clicked", () => {
   //    const navigateMock = jest.fn();
   //    useNavigate.mockReturnValue(navigateMock);
   //    render(
   //       <MemoryRouter>
   //          <SingleMovie {...mockMovie} />
   //       </MemoryRouter>
   //    );
   //    const container = screen.getByTestId("movie-container");

   //    fireEvent.click(container);

   //    expect(navigateMock).toHaveBeenCalledWith(`/details/1`);
   // });
});
