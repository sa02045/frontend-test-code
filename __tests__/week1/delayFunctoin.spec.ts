import { delayFunction } from "../../src/week1/delayFunction";
import { describe, test, expect, vi } from "vitest";

describe("delayFunction 함수", () => {
  test("delay 시간 후에 callback 함수를 실행한다", () => {
    // Given
    vi.useFakeTimers();
    const delay = 1000;
    const callback = vi.fn();

    // When
    delayFunction(callback, 1000);

    vi.advanceTimersByTime(delay);
    expect(callback).toBeCalled();
  });

  test("delay 시간 전에는 callback 함수를 실행하지 않는다", () => {
    // Given
    const delay = 500;
    const callback = vi.fn();

    // When
    delayFunction(callback, 1000);
    vi.advanceTimersByTime(delay);

    // Then
    expect(callback).not.toBeCalled();
  });
});
