import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CartItem from "./CartItem";

describe("CartItem", () => {
   const mockCartItem = {
      id: 1,
      name: "Test Item",
      price: 10.0,
      amount: 2,
   };

   it("should render the item name, price, and amount", () => {
      render(
         <CartItem {...mockCartItem} onRemove={() => {}} onAdd={() => {}} />
      );

      const itemName = screen.getByText("Test Item");
      const itemPrice = screen.getByText("$10.00");
      const itemAmount = screen.getByText("x 2");

      expect(itemName).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
      expect(itemAmount).toBeInTheDocument();
   });

   it("should call onRemove when minus button is clicked", () => {
      const mockOnRemove = jest.fn();
      render(
         <CartItem {...mockCartItem} onRemove={mockOnRemove} onAdd={() => {}} />
      );

      const minusButton = screen.getByText("−");
      fireEvent.click(minusButton);

      expect(mockOnRemove).toHaveBeenCalledWith(mockCartItem);
   });

   it("should call onAdd when plus button is clicked", () => {
      const mockOnAdd = jest.fn();
      render(
         <CartItem {...mockCartItem} onRemove={() => {}} onAdd={mockOnAdd} />
      );

      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      expect(mockOnAdd).toHaveBeenCalledWith(mockCartItem);
   });
});
