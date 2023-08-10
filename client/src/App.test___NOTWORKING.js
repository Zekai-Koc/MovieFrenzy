import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import App from "./App"; // Replace with your actual path
import Home from "./pages/Home"; // Replace with your actual path

// Mock the components using their original implementation
jest.mock("./pages/Home");

describe("App", () => {
   it("renders Home component for the / route", () => {
      Home.mockImplementation(() => <div>Home Component</div>);

      render(
         <MemoryRouter initialEntries={["/"]}>
            <Routes>
               <Route path="/" element={<App />} />
            </Routes>
         </MemoryRouter>
      );

      const homeComponent = screen.getByText("Home Component");
      expect(homeComponent).toBeInTheDocument();
   });
});
