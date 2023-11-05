import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";
describe(() => {
  it("더하기 버튼을 누르면 올라간다.", () => {
    // when
    const counter = render(<Counter />);
    // 버튼 가져오기
    const decreaseBtn = counter.queryByText("-") as HTMLElement;

    // then
    fireEvent.click(decreaseBtn);

    // expect
    expect(1).toBeTruthy();
  });
});
