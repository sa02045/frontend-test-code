import { useNumberController } from "../useNumberController";
import { renderHook, act } from "@testing-library/react";
import { describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
describe("useNumberController", () => {
  // 테스트를 위한 Test컴포넌트를 사용한 테스트
  it("should show default count", () => {
    function TestComponent() {
      const { count, onDecrease, onIncrease } = useNumberController(0);
      return (
        <div>
          <button onClick={onDecrease}>-</button>
          <span>{count}</span>
          <button onClick={onIncrease}>+</button>
        </div>
      );
    }
    render(<TestComponent />);
    expect(screen.getByText("0")).toBeInTheDocument();
    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("should show default count", () => {
    const DEFAULT_COUNT = 0;
    const { result } = renderHook(() => useNumberController(DEFAULT_COUNT));
    expect(result.current.count).toBe(DEFAULT_COUNT);
  });

  test("should increment count when onIncrease is called", () => {
    const DEFAULT_COUNT = 0;
    const { result } = renderHook(() => useNumberController(DEFAULT_COUNT));
    act(() => {
      result.current.onIncrease();
    });
    expect(result.current.count).toBe(1);
  });
});
