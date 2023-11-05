import { useState } from "react";

function MinuteCounter() {
  const [minute, setMinute] = useState(10);

  function handleIncrease() {
    setMinute((prev) => {
      return prev + 5;
    });
  }

  return (
    <div>
      <button>-</button>
      <span>{minute}분</span>
      <button disabled={minute >= 20} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default MinuteCounter;
