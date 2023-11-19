// TODO: 컴포넌트 작성하고 테스트하기

// useIsTimeout.ts
// 정해진 시간 뒤에 콜백을 실행하는 hook
// vi.advanceTimersByTime를 활용해 테스트하기 쉽게 만들어보자

export function useIsTimeout(cb: () => void, ms: number = 0) {
  setTimeout(() => {
    cb();
  }, ms);
}
