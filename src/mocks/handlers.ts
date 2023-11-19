import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/resource", () => {
    return HttpResponse.text("Hello world!");
  }),

  // 장바구니 목록을 가져오는 요청을 가로챕니다.
  http.get("/carts", async () => {
    return HttpResponse.json([
      { name: "짜장면", price: 9000 },
      { name: "짬뽕", price: 5000 },
      { name: "탕수육", price: 10000 },
    ]);
  }),
];
