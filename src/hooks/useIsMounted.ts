// TODO: 컴포넌트 작성하고 테스트하기

import { useEffect, useState } from "react";

// useIsMounted.ts
// 컴포넌트가 마운트 되었는지 확인하는 커스텀 훅
// reference: toss/slash https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/useIsMounted.ts

// Component의 mount 여부를 알 수 있는 hook 입니다.
// SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에 어떤 동작을 실행하기 위해서 사용합니다.
// 이 함수가 아니라 isServer() 함수를 사용할 경우, SSR 환경에서 Hydration 오류로 인해서 서비스가 심각하게 오동작할 수 있습니다.

export function useIsMounted() {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return [isMounted];
}
