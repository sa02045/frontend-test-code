import { TestComponent } from "../TestComponent";
import { describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "../../mocks/server";
import "@testing-library/jest-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("TestComponent", () => {
  it("renders the text from the server", async () => {
    render(<TestComponent />);
    const text = await screen.findByText("Hello world!");

    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
});
