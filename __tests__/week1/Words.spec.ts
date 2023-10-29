import { Words } from "../../src/week1/Words";
import { describe, test, expect, vi } from "vitest";

describe("Words 클래스", () => {
  test("단어를 추가할 수 있다.", () => {
    // given
    const word = {
      word: "apple",
      mean: "사과",
    };
    const words = new Words();
    const addSpy = vi.spyOn(words, "add");

    // when
    words.add(word);

    // then
    expect(words.check(word)).toBe(true);
    expect(addSpy).toBeCalledWith(word);
  });

  test("단어를 삭제할 수 있다.", () => {
    // given
    const word = {
      word: "apple",
      mean: "사과",
    };
    const words = new Words();

    // when
    words.add(word);
    words.remove(word);

    // then
    expect(words.check(word)).toBe(false);
  });

  test("단어가 있는지 확인할 수 있다.", () => {
    // given
    const word = {
      word: "apple",
      mean: "사과",
    };
    const words = new Words();

    // when
    words.add(word);

    // then
    expect(words.check(word)).toBe(true);
  });
});
