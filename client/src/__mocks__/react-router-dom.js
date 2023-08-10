import React from "react";

const mockUseParams = jest.fn();
jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"),
   useParams: mockUseParams,
}));

export default {
   mockUseParams,
};
