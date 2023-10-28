import { describe, test, expect } from "vitest";
import { sum } from "../../src/week1/sum";
describe("sum 함수", () => {
  test("두 인자를 받아 합을 반환한다", () => {
    // Given
    const a = 1;
    const b = 2;

    // When
    const result = sum(a, b);

    // Then
    expect(result).toBe(3);
  });
});
