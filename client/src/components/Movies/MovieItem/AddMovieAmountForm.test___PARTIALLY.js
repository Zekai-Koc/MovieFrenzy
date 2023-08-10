import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // For simulating user events
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, act } from "@testing-library/react";
import AddMovieAmountForm from "./AddMovieAmountForm";

// import AddMovieAmountForm from "./AddMovieAmountForm";

describe("AddMovieAmountForm", () => {
   it("renders input field with correct attributes", () => {
      render(<AddMovieAmountForm onAddToCart={() => {}} id="amount" />);

      const inputElement = screen.getByRole("spinbutton", { name: /amount/i });
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "number");
      expect(inputElement).toHaveAttribute("min", "1");
      expect(inputElement).toHaveAttribute("max", "5");
      expect(inputElement).toHaveAttribute("step", "1");
      expect(inputElement).toHaveValue(1);
   });

   it("displays validation error message for invalid input", () => {
      render(<AddMovieAmountForm onAddToCart={() => {}} id="amount" />);

      const inputElement = screen.getByRole("spinbutton", { name: /amount/i });
      const addButton = screen.getByRole("button", { name: /add/i });

      fireEvent.change(inputElement, { target: { value: "0" } });
      fireEvent.click(addButton);

      const errorElement = screen.getByText(
         /Please enter a valid amount \(1-5\)/i
      );
      expect(errorElement).toBeInTheDocument();
   });

   it("calls onAddToCart with entered amount on form submit", () => {
      const onAddToCartMock = jest.fn();
      render(<AddMovieAmountForm onAddToCart={onAddToCartMock} id="amount" />);

      const inputElement = screen.getByRole("spinbutton", { name: /amount/i });
      const addButton = screen.getByRole("button", { name: /add/i });

      fireEvent.change(inputElement, { target: { value: "3" } });
      fireEvent.click(addButton);

      expect(onAddToCartMock).toHaveBeenCalledWith(3);
   });

   // it("resets input field after form submission", async () => {
   //    render(<AddMovieAmountForm onAddToCart={() => {}} />);
   //    const inputElement = screen.getByRole("spinbutton", {
   //       id: "your-input-id",
   //    }); // Replace "your-input-id" with the actual ID of the input element
   //    const addButton = screen.getByRole("button", { name: "+ Add" });

   //    fireEvent.change(inputElement, { target: { value: "2" } });
   //    fireEvent.click(addButton);

   //    await act(async () => {
   //       await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for state updates to propagate
   //    });

   //    expect(inputElement).toHaveValue(1);
   // });
});
