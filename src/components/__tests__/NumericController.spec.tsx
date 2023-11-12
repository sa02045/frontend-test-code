import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { NumericController } from "../NumericController";

describe("NumericController", () => {
  it("수량의 기본값은 1개이다.", () => {
    render(<NumericController />);
    const quantity = screen.getByText("1개");
    expect(quantity).toBeInTheDocument();
  });

  it("-버튼을 클릭을 하면 수량이 줄어든다.- 1개일때는 -버튼을 눌러도 줄어들지 않는다", async () => {
    render(<NumericController />);
    const minusButton = screen.getByText("-");
    await userEvent.click(minusButton);
    const quantity = screen.getByText("1개");
    expect(quantity).toBeInTheDocument();
  });

  it("-버튼을 클릭을 하면 수량이 줄어든다.- 1개이상일때는", async () => {
    render(<NumericController />);
    const minusButton = screen.getByText("-");
    const plusButton = screen.getByText("+");

    await userEvent.click(plusButton);
    expect(screen.getByText("2개")).toBeInTheDocument();
    await userEvent.click(plusButton);
    expect(screen.getByText("3개")).toBeInTheDocument();
    await userEvent.click(minusButton);
    expect(screen.getByText("2개")).toBeInTheDocument();
  });
  it("최소 수량은 1개이다. disabled가 된다.", () => {
    render(<NumericController />);
    const minusButton = screen.getByText("-");
    expect(minusButton).toBeDisabled();
  });
});
