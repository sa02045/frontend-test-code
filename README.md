- [jsdom](#jsdom)
- [스냅샷 테스트 - 이전의 결과와 현재의 결과를 비교한다.](#스냅샷-테스트---이전의-결과와-현재의-결과를-비교한다)

## jsdom

<details>
<summary>jsdom 사용이유</summary>

jsdom은 브라우저 DOM을 서버사이드에서 사용하기 위해 자바스크립트로 구현된 라이브러리이다.

DOM은 원래 `브라우저` 런타임 환경에서 생성되고 동작한다. 그렇기 때문에 `서버사이드` 테스트 환경인 Node.js에는 DOM이 없다. 따라서 DOM이 필요한 테스트를 서버사이드에서 실행하려면 DOM 구현체가 필요하다.

</details>

<details>
<summary>jsdom의 한계</summary>

**jsdom 한계**

- 브라우저 DOM의 모든 스펙을 구현한 것은 아니다
- 따라서 브라우저 환경과 다른 부분이 있을 수 있다. ([JSDOM은 진짜 DOM이 아니다](https://ui.toast.com/posts/ko_20220624).)

**jsdom 대체 라이브러리**

- happy-dom (좀 더 빠르나 jsdom보다 DOM 스펙이 덜 구현되어있다.)

</details>

<details>
<summary>vitest에서 jsdom 설정방법</summary>

vitest.config.js에 추가

```js
test: {
   environment: "jsdom",
},
```

</details>

## 스냅샷 테스트 - 이전의 결과와 현재의 결과를 비교한다.
