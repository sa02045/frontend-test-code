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

    // findByText는 비동기로 렌더링하는 요소들을 찾을 때 사용한다.
    const text = await screen.findByText("Hello world!");

    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
});
