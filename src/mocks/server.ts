import { setupServer } from "msw/node";

import { http } from "msw";

export const worker = setupServer();
