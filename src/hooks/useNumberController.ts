import { useState } from "react";

export function useNumberController(
  initialCount: number,
  minCount = Number.MIN_SAFE_INTEGER,
  maxCount = Number.MAX_SAFE_INTEGER,
  step = 1
) {
  const [count, setCount] = useState(initialCount);

  function onIncrease() {
    if (count <= maxCount) {
      setCount((prev) => prev + step);
    }
  }

  function onDecrease() {
    if (count >= minCount) {
      setCount((prev) => prev - step);
    }
  }

  return {
    count,
    onIncrease,
    onDecrease,
  };
}
