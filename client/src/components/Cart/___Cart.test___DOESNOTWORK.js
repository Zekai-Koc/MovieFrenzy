import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart", () => {
   it("renders Cart component with items and total amount", () => {
      const mockCartItems = [
         { id: "item1", name: "Item 1", amount: 2, price: 10.99 },
         { id: "item2", name: "Item 2", amount: 1, price: 5.99 },
      ];
      const mockTotalAmount = 27.97;
      const mockOnClose = jest.fn();
      const mockOnAdd = jest.fn();
      const mockOnRemove = jest.fn();

      render(
         <Cart
            cartItems={mockCartItems}
            totalAmount={mockTotalAmount}
            onClose={mockOnClose}
            onAdd={mockOnAdd}
            onRemove={mockOnRemove}
         />
      );

      // Check if cart items are rendered
      const cartItem1 = screen.getByText("Item 1");
      const cartItem2 = screen.getByText("Item 2");
      expect(cartItem1).toBeInTheDocument();
      expect(cartItem2).toBeInTheDocument();

      // Check total amount
      const totalAmount = screen.getByText("27.97");
      expect(totalAmount).toBeInTheDocument();

      // Check buttons
      const closeButton = screen.getByText("Close");
      const orderButton = screen.getByText("Order");
      expect(closeButton).toBeInTheDocument();
      expect(orderButton).toBeInTheDocument();

      // Perform an action, e.g., click on the Close button
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
   });
});
