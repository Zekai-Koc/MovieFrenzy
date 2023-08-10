// import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch";

describe("Testing custom hook: useFetch ", () => {
   it("fetches data successfully", async () => {
      const mockData = { someKey: "someValue" };
      const mockUrl = "https://example.com/api/data";
      global.fetch = jest.fn(() =>
         Promise.resolve({
            json: () => Promise.resolve(mockData),
            ok: true,
         })
      );

      const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

      // Initial state
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      await waitForNextUpdate(); // Wait for useEffect to complete

      // Updated state after successful fetch
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
   });

   it("handles fetch error", async () => {
      const mockUrl = "https://example.com/api/data";
      global.fetch = jest.fn(() =>
         Promise.resolve({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
         })
      );

      const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));

      // Initial state
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      await waitForNextUpdate(); // Wait for useEffect to complete

      // Updated state after fetch error
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe("Network response was not ok!");
   });
});
