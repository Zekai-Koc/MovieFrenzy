import React from "react";
import Movies from "./Movies";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(() => {
   cleanup();
});

describe("TEST-1: check if test file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: plain render", () => {
   it("renders Movies component simple render", () => {
      render(<Movies />);
   });
});

describe("TEST-3: check element", () => {
   it("renders Movies component and checks one element.", () => {
      render(<Movies />);
      const containerMovies = screen.getByTestId("container-movies");
      expect(containerMovies).toBeInTheDocument();
   });
});
