import { describe, it, expect } from "vitest";
import Counter from "./Counter";
import { render } from "react-dom";

const div = document.createElement("div");

describe("Counter", () => {
  it("render", () => {});
  expect(render(<Counter />, div)).toMatchSnapshot();
});
