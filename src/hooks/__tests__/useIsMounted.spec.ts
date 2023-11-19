import { describe } from "vitest";
import { useIsMounted } from "../useIsMounted";
import { renderHook } from "@testing-library/react";

describe("useIsMounted", () => {
  it("true when mounted", () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current[0]).toBe(true);
  });
});
