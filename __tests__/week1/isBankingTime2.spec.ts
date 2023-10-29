import { isBankingTime2 } from "../../src/week1/isBankingTime";
import { describe, test, expect } from "vitest";

describe("isBankingTime2 함수", () => {
  test("점검시간이면 true를 반환한다", () => {
    // Given
    const date = new Date(2021, 0, 1, 23, 15, 0);

    // When
    const result = isBankingTime2(date);

    // Then
    expect(result).toBe(true);
  });

  test("점검시간이 아니면 false를 반환한다", () => {
    // Given
    const date = new Date(2021, 0, 1, 22, 31, 0);

    // When
    const result = isBankingTime2(date);

    // Then
    expect(result).toBe(false);
  });
});
