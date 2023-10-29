import { describe, test, expect } from "vitest";
import { minus, multiply, divide } from "../../src/week1/calculate";
import ReactTestUtils from "react-dom/test-utils"; // ES6

describe("calculate 유틸 함수", () => {
  describe("minus 함수", () => {
    test("두 인자를 받아 뺄셈을 반환한다", () => {
      const a = 1;
      const b = 2;

      const result = minus(a, b);

      expect(result).toBe(-1);
    });
  });
  describe("multiply 함수", () => {
    test("두 인자를 받아 곱셈을 반환한다", () => {
      const a = 1;
      const b = 2;

      const result = multiply(a, b);

      expect(result).toBe(2);
    });
  });
  describe("divide 함수", () => {
    test("0으로 나누면 에러를 발생한다.", () => {
      const a = 1;
      const b = 0;

      const result = divide(a, b);

      expect(result).toBe(Infinity);
    });

    test("두 인자를 받아 나눗셈을 반환한다", () => {
      const a = 1;
      const b = 2;

      const result = divide(a, b);

      expect(result).toBe(0.5);
    });
  });
});
