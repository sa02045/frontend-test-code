import { describe, it, expect } from "vitest";
import MinuteCounter from "./MinuteCounter";
import { render, fireEvent, screen } from "@testing-library/react";

describe("MinuteCounter", () => {
  it("기본 시간은 10분이다.", () => {
    const minuteCounter = render(<MinuteCounter />);
    expect(minuteCounter.queryByText("10분")).toBeTruthy();
  });

  it("+ 버튼을 누르면 5분이 증가한다.", () => {
    render(<MinuteCounter />);

    const plusButton = screen.getByText("+") as HTMLElement;
    fireEvent.click(plusButton);

    expect(screen.findByText("15분")).toBeTruthy();
  });

  it("사용자가 증가버튼을 계속 눌러도 최대 20분이상으로 늘어나지 않는다.", () => {
    render(<MinuteCounter />);

    const plusButton = screen.queryByText("+") as HTMLElement;
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(screen.findByText("20분")).toBeTruthy();

    expect(plusButton.attributes.getNamedItem("disabled")).toBeTruthy();
  });
});
