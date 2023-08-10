import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import HeaderCartButton from "./HeaderCartButton";
// import "@testing-library/jest-dom/extend-expect"; // Import the extended matchers

// Mock the CartIcon component
jest.mock("../Cart/CartIcon", () => {
   return function MockCartIcon() {
      return <div data-testid="mock-cart-icon"></div>;
   };
});

describe("HeaderCartButton", () => {
   it("should render the button with correct badge count", () => {
      const mockCartItems = [
         { id: 1, name: "test item 1", amount: 2, price: 10 },
         { id: 2, name: "test item 2", amount: 1, price: 5 },
         { id: 3, name: "test item 3", amount: 3, price: 15 },
      ];

      const mockOnClick = jest.fn();

      render(
         <HeaderCartButton cartItems={mockCartItems} onClick={mockOnClick} />
      );

      const buttonElement = screen.getByRole("button", { name: /movie cart/i });
      const badgeElement = screen.getByText(mockCartItems.length.toString());

      expect(buttonElement).toBeInTheDocument();
      expect(badgeElement).toBeInTheDocument();
   });

   it("should highlight the button when items are added to the cart", () => {
      const mockCartItems = [
         { id: 1, name: "test item 1", amount: 2, price: 10 },
         { id: 2, name: "test item 2", amount: 1, price: 5 },
      ];

      const mockOnClick = jest.fn();

      render(
         <HeaderCartButton cartItems={mockCartItems} onClick={mockOnClick} />
      );

      const buttonElement = screen.getByRole("button", { name: /movie cart/i });

      expect(buttonElement).toHaveClass("bump");
   });

   it("should call onClick when the button is clicked", () => {
      const mockCartItems = []; // Empty cart items

      const mockOnClick = jest.fn(); // Mocked onClick function

      render(
         <HeaderCartButton cartItems={mockCartItems} onClick={mockOnClick} />
      );

      const buttonElement = screen.getByRole("button", { name: /movie cart/i });

      fireEvent.click(buttonElement); // Simulate a click event on the button

      // Use an assertion that waits for the mocked function to be called
      expect(mockOnClick).toHaveBeenCalledTimes(1);
   });
});
