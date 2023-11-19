import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { CartPage } from "./CartPage";
import "@testing-library/jest-dom";

const menus = [
  { name: "짜장면", price: 5000 },
  { name: "짬뽕", price: 6000 },
  { name: "탕수육", price: 12000 },
];

describe("CartPage", () => {
  it('장바구니에 담긴 메뉴가 없으면 "장바구니가 비었어요"라고 표시해주세요', () => {
    render(<CartPage menus={[]} />);
    expect(screen.getByText("장바구니가 비었어요")).toBeInTheDocument();
  });
  it('기본 배달 방식은 "배달"이다.', () => {
    render(<CartPage menus={[]} />);
    expect(screen.getByLabelText("배달")).toBeChecked();
    expect(screen.getByLabelText("포장")).not.toBeChecked();
  });

  it("메뉴 수량을 변경할 수 있다.", async () => {
    render(<CartPage menus={menus} />);
    const minusButtons = screen.getAllByText("-")[0];
    await userEvent.click(minusButtons);
    expect(screen.getByText("0개")).toBeInTheDocument();
  });
});
