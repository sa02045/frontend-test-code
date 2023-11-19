// 시작 시각, 끝나는 시각이 있다.
// 일별, 월별을 선택할 수 있다.
// 일별을 고르면 고른 날짜의 state date는 00시00분00초로 초기화된다.
// 월별을 고르면 고른 월의 state date는 1일 00시00분00초로 초기화된다. end date는 그 달의 마지막 날 23시59분59초로 초기화된다.

import { useState } from "react";
// 훅 - 시간(date) - 모킹해야될까?
import dayjs from "dayjs";

export function useRangeDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleStartDate(date = new Date()) {
    setStartDate(date);
    // 시작일이 종료일부터 30일이상 차이가 난다면 종료일을 시작일로부터 30일차이나게 만든다
    const start = dayjs(date);
    const end = dayjs(endDate);
    const diff = end.diff(start, "day");
    if (diff > 30) {
      setEndDate(start.add(30, "day").toDate());
    }
  }

  function handleEndDate(date = new Date()) {
    setEndDate(date);
  }

  return {
    handleEndDate,
    handleStartDate,
    startDate,
    endDate,
  };
}
