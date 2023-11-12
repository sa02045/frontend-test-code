import { setupServer } from "msw/node";

import { HttpResponse, http } from "msw";
import { menus } from "./mockData";
const handlers = [
  http.get("/carts", () => {
    return HttpResponse.json(menus);
  }),
];

export const worker = setupServer(...handlers);
