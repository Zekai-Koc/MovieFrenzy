import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderCartButton from "./HeaderCartButton";

// Mock the CartIcon component
jest.mock("../Cart/CartIcon", () => {
   return function MockCartIcon() {
      return <div data-testid="mock-cart-icon"></div>;
   };
});

describe("HeaderCartButton", () => {
   it("should render without crashing", () => {
      render(<HeaderCartButton cartItems={[]} onClick={() => {}} />);
      const buttonElement = screen.getByRole("button", { name: /movie cart/i });
      expect(buttonElement).toBeDefined();
   });

   it("should render the correct badge count", () => {
      const mockCartItems = [
         { id: 1, name: "test item 1", amount: 2, price: 10 },
         { id: 2, name: "test item 2", amount: 1, price: 5 },
      ];
      render(<HeaderCartButton cartItems={mockCartItems} onClick={() => {}} />);
      const badgeElement = screen.getByText(mockCartItems.length.toString());
      expect(badgeElement).toBeDefined();
   });

   it("should highlight the button when items are added to the cart", () => {
      const mockCartItems = [
         { id: 1, name: "test item 1", amount: 2, price: 10 },
         { id: 2, name: "test item 2", amount: 1, price: 5 },
      ];
      render(<HeaderCartButton cartItems={mockCartItems} onClick={() => {}} />);
      const buttonElement = screen.getByRole("button", { name: /movie cart/i });
      expect(buttonElement.classList.contains("bump")).toBe(true);
   });

   it("should not highlight the button when cart is empty", () => {
      const mockCartItems = [];
      render(<HeaderCartButton cartItems={mockCartItems} onClick={() => {}} />);
      const buttonElement = screen.getByRole("button", { name: /movie cart/i });
      expect(buttonElement.classList.contains("bump")).toBe(false);
   });

   it("should call onClick when the button is clicked", () => {
      const mockCartItems = [];
      const mockOnClick = jest.fn();
      render(
         <HeaderCartButton cartItems={mockCartItems} onClick={mockOnClick} />
      );
      const buttonElement = screen.getByRole("button", { name: /movie cart/i });
      fireEvent.click(buttonElement);
      expect(mockOnClick).toHaveBeenCalled();
   });
});
