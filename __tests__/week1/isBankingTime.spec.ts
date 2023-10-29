import { isBankingTime } from "../../src/week1/isBankingTime";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";

describe("isBankingTime 함수", () => {
  beforeEach(() => {
    // Mock 시간을 사용한다고 선언한다.
    vi.useFakeTimers();
  });

  afterEach(() => {
    // clean up
    // 실제 시간을 사용한다고 선언한다.
    vi.useRealTimers();
  });

  test("점검시간이면 true를 반환한다", () => {
    // Given
    const date = new Date(2021, 0, 1, 23, 15, 0);
    vi.setSystemTime(date);

    // When
    const result = isBankingTime();

    // Then
    expect(result).toBe(true);
  });

  test("점검시간이 아니면 false를 반환한다", () => {
    // Given
    const date = new Date(2021, 0, 1, 22, 0, 0);
    vi.setSystemTime(date);

    // When
    const result = isBankingTime();

    // Then
    expect(result).toBe(false);
  });
});
