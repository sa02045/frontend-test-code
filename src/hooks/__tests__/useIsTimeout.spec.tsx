import { renderHook } from "@testing-library/react";
import { useIsTimeout } from "../useTimeout";
import { describe, it, vi } from "vitest";

describe("useIsTimeout", () => {
  it("지정한 시간 이전에는 콜백이 호출되지 않는다", () => {
    // when
    const ms = 2000;
    const cb = vi.fn();
    vi.useFakeTimers();

    // given
    renderHook(() => useIsTimeout(cb, ms));
    vi.advanceTimersByTime(ms - 1);

    // then
    expect(cb).not.toHaveBeenCalled();
  });

  it("지정한 시간 이후에 콜백이 호출되야한다.", () => {
    // when
    const ms = 2000;
    const cb = vi.fn();
    vi.useFakeTimers();

    // given
    renderHook(() => useIsTimeout(cb, ms));
    vi.advanceTimersByTime(ms);

    // then
    expect(cb).toHaveBeenCalled();
  });
});
