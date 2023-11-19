import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Transfer } from "../Transfer";
import "@testing-library/jest-dom";

describe("Transfer Component", () => {
  it("사용자 이름이 표시된다.", async () => {
    render(<Transfer name="리액트" balance={12312312} />);
    expect(screen.getByText("리액트")).toBeInTheDocument();
  });

  it("input은 존재한다", () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    expect(input).toBeDefined();
  });

  it("00을 입력하면 0이 표시된다.", () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "00" } });
    expect(input.value).toBe("0");
  });

  it("기본값은 0이다.", async () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    expect(input.value).toBe("0");
  });

  it("숫자는 입력할 수 있다.", async () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1231" } });
    expect(input.value).toBe("1,231");
  });

  it("문자는 입력할 수 없다.", async () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "리액트 타입스크립트" } });

    expect(input.value).toBe("0");
  });

  it("천단위로 콤마를 찍는다", async () => {
    render(<Transfer name="리액트" balance={12312312} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;

    // https://github.com/elastic/kibana/pull/170533
    // userEvent.type는 문제가 있어요. 긴 문자열에 대해서 이슈가 있어요
    // 대신 fireEvent.change를 사용해요

    fireEvent.change(input, { target: { value: "12313" } });
    expect(input.value).toBe("12,313");
  });

  it("잔액보다 큰 금액을 입력할수 없어요. 잔액만큼 입력해요", async () => {
    render(<Transfer name="리액트" balance={5321} />);
    const input = screen.getByLabelText("송금") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "12311113" } });
    expect(input.value).toBe("5,321");
  });
});
