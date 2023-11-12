import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MenuType } from "../MenuType";

describe("MenuType", () => {
  it("배달 input과 포장 input이 있다", () => {
    const onChange = vi.fn();
    render(<MenuType onChange={onChange} defaultValue="배달" />);
    const 배달체크박스 = screen.getByLabelText("배달");
    const 포장체크박스 = screen.getByLabelText("포장");
    expect(배달체크박스).toBeDefined();
    expect(포장체크박스).toBeDefined();
  });

  it("기본값은 배달이다.", () => {
    const onChange = vi.fn();
    render(<MenuType onChange={onChange} defaultValue="배달" />);

    const 배달체크박스 = screen.getByLabelText("배달") as HTMLInputElement;
    const 포장체크박스 = screen.getByLabelText("포장") as HTMLInputElement;
    expect(배달체크박스.checked).toBe(true);
    expect(포장체크박스.checked).toBe(false);
  });

  it("체크박스를 클릭하면 해당 하나의 값만 활성화 된다.", async () => {
    const onChange = vi.fn();
    render(<MenuType onChange={onChange} defaultValue="배달" />);

    const 배달체크박스 = screen.getByLabelText("배달") as HTMLInputElement;
    const 포장체크박스 = screen.getByLabelText("포장") as HTMLInputElement;
    const 포장레이블 = screen.getByText("포장");
    fireEvent.click(포장레이블);

    expect(배달체크박스).not.toBeChecked();
    expect(포장체크박스).toBeChecked();
  });

  it("체크박스를 클릭하면 onChange 핸들러가 값과 함께 호출된다.", async () => {
    const onChange = vi.fn();
    render(<MenuType onChange={onChange} defaultValue="배달" />);
    const 포장체크박스 = screen.getByLabelText("포장") as HTMLInputElement;
    await userEvent.click(포장체크박스);
    expect(onChange).toBeCalledWith("포장");
  });
});
