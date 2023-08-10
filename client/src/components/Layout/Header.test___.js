import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

// Mock the useNavigate function
jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"),
   useNavigate: () => jest.fn(),
}));

describe("Header", () => {
   it("navigates to /filmstrip when Film Strip button is clicked", () => {
      const mockCartItems = [
         { name: "test", amount: 2, price: 10 },
         { name: "test", amount: 1, price: 5 },
         { name: "test", amount: 3, price: 15 },
      ];

      const mockNavigate = jest.fn();

      // Set the mocked navigate function
      jest
         .spyOn(require("react-router-dom"), "useNavigate")
         .mockReturnValue(mockNavigate);

      render(
         <MemoryRouter>
            <Header cartItems={mockCartItems} onShowCart={() => {}} />
         </MemoryRouter>
      );

      const filmStripButton = screen.getByText("Film Strip");
      fireEvent.click(filmStripButton);

      // Check if navigate function was called with the correct path
      expect(mockNavigate).toHaveBeenCalledWith("/filmstrip");
   });
});
