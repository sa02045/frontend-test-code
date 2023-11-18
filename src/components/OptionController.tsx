import { useNumberController } from "../hooks/useNumberController";

const OPTION_INITIAL_COUNT = 5;
const OPTION_MIN_COUNT = 5;
const OPTION_MAX_COUNT = 10;

export function OptionController() {
  const { count, onDecrease, onIncrease } = useNumberController(
    OPTION_INITIAL_COUNT,
    OPTION_MIN_COUNT,
    OPTION_MAX_COUNT
  );

  const isDecreaseDisable = count === OPTION_MIN_COUNT;
  const isIncreaseDisable = count === OPTION_MAX_COUNT;

  return (
    <div>
      <button disabled={isDecreaseDisable} onClick={onDecrease}>
        -
      </button>
      <span>{count}개</span>
      <button disabled={isIncreaseDisable} onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
