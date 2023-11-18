import { useNumberController } from "../hooks/useNumberController";

const MENU_INITIAL_COUNT = 5;
const MENU_MAX_COUNT = 20;
const MENU_MIN_COUNT = 1;

export function MenuNumberController() {
  const { count, onDecrease, onIncrease } = useNumberController(MENU_INITIAL_COUNT, MENU_MAX_COUNT, MENU_MAX_COUNT);

  const isDecreaseDisable = count === MENU_MIN_COUNT;
  const isIncreaseDisable = count === MENU_MAX_COUNT;

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
