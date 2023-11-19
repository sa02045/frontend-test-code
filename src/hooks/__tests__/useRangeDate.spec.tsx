import { renderHook } from "@testing-library/react";
import { useRangeDate } from "../useRangeDate";
import { describe, it } from "vitest";
import { act } from "react-test-renderer";
describe("useRangeDate", () => {
  it("월별을 선택한 경우", () => {
    // when
    const startDate = new Date("2021-01-01");
    const 지난_30일이후 = new Date("2021-01-31");
    const { result } = renderHook(() => useRangeDate());

    act(() => {
      result.current.handleStartDate(startDate);
    });

    // 30일 차이나는지

    // 객체 (new Date)끼리 비교하려면 toStrictEqual을 사용해야한다.
    // 그냥 toBe를 사용하면 객체의 주소값을 비교하기 때문에 실패한다.
    expect(result.current.endDate).toStrictEqual(지난_30일이후);
  });
});
