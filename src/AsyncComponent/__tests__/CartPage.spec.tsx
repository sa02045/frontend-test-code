import { CartPage } from "../CartPage";
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "../../mocks/server";
import "@testing-library/jest-dom";
import { http, HttpResponse } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("CartPage", () => {
  it("API 요청 응답값으로 장바구니 리스트를 보여준다.", async () => {
    render(<CartPage />);

    const lists = await screen.findAllByRole("listitem");

    expect(lists).toHaveLength(3);
  });
  it("API 요청 응답값이 빈 배열이면 `장바구니가 비었어요` 라는 문구를 보여준다", async () => {
    // when
    server.resetHandlers(
      http.get("/carts", async () => {
        return HttpResponse.json([]);
      })
    );

    render(<CartPage />);

    const text = await screen.findByText("장바구니가 비었어요");

    expect(text).toBeInTheDocument();
  });

  it("최대로 보여줄 수 있는 장바구니는 4개이다. 장바구니 순서는 메뉴 가격의 오름차순이다.", async () => {
    server.resetHandlers(
      http.get("/carts", async () => {
        return HttpResponse.json([
          { name: "짜장면", price: 9000 },
          { name: "짬뽕", price: 5000 },
          { name: "탕수육", price: 10000 },
          { name: "볶음밥", price: 7000 },
          { name: "팔보채", price: 13000 },
        ]);
      })
    );
    render(<CartPage />);
    const lists = await screen.findAllByRole("listitem");
    expect(lists).toHaveLength(4);

    expect(lists[0]).toHaveTextContent("5000원");
    expect(lists[1]).toHaveTextContent("7000원");
    expect(lists[2]).toHaveTextContent("9000원");
    expect(lists[3]).toHaveTextContent("10000원");
  });
});
