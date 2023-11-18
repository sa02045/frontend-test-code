# Hook 테스트

Custom Hook useNumberController를 사용하여

- MenuNumberController.tsx
- OptionController.tsx

# Custom Hook 테스트

## Hook은 컴포넌트 내부 또는 다른 Hook 내부에서만 호출 가능합니다.

- `Testing Library`를 사용하여 Hook을 테스트하려면 테스트만을 위한 추가적인 컴포넌트가 필요합니다.
- 왜냐하면 React Hook은 컴포넌트 내부 또는 다른 Hook 내부에서만 호출 가능하기 때문입니다.
- 단독으로 Hook을 실행하고 테스트할 수 없습니다.

```js
it("should show default count", () => {
  function TestComponent() {
    const { count, onDecrease, onIncrease } = useNumberController(0);
    return (
      <div>
        <button onClick={onDecrease}>-</button>
        <span>{count}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    );
  }
  render(<TestComponent />);
  expect(screen.getByText("0")).toBeInTheDocument();
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton);
  expect(screen.getByText("1")).toBeInTheDocument();
});
```

## 이러한 테스트 방법의 문제는 무엇일까요?

- `Hook`은 구현세부사항에 관심이 있습니다. `컴포넌트`는 구현세부사항에 관심이 없습니다.
- 테스트만을 위한 컴포넌트를 작성하고 싶지 않습니다!

# react-hooks-testing-library

- React Hook만을 위한 테스트 라이브러리
- Hook의 구현세부사항 테스트
- 테스트컴포넌트를 작성할 필요가 없습니다.

## 렌더러

- react-hooks-testing-library는 `react-test-render`를 기본 렌더러로 사용합니다.
  - `react-test-render`: 리액트 컴포넌트를 자바스크립트 객체인 가상 DOM 트리로 렌더링해주는 라이브러리
    - DOM을 사용하지 않습니다. 따라서 jsdom같은 DOM 구현체환경에 의존하지 않습니다.

## 핵심 API

### renderHook, act

```js
renderHook(callback);
// callback: 테스트 컴포넌트의 각 렌더링에 호출되는 함수.
// 이 함수는 테스트를 위해 하나 이상의 후크를 호출해야 합니다.

const { result } = renderHook(() => useNumberController(DEFAULT_COUNT));
// result: Hook을 렌더링한 결과를 담고 있는 객체

// act()호출 내에서 업데이트를 수행하는 코드를 래핑합니다.
act(() => {
  // result.current 속성으로 hook의 반환값에 접근할 수 있습니다.
  result.current.onIncrease();
});

expect(result.current.count).toBe(1);
```
