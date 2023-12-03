# e2e 테스트

- End to End (애플리케이션의 흐름을 처음부터 끝까지 테스트)

- E2E 테스트 : 프로덕트를 사용자 관점에서 테스트. 여러 인프라가 갖추어진 상태로 사용자 관점에서 테스트
- Integration 테스트 : 여러 모듈이 합쳐진 하나의 기능을 테스트
- Unit 테스트 : 특정 모듈 단위가 의도된 대로 동작하는지 검증

### E2E 테스트 단점

- 네트워크 에러와 같은 랜덤 변수로 생기는 실패 때문에 테스트 신뢰도가 낮다.
- 테스트 비용이 많이 든다
  - 테스트 속도
    - 실제 API응답, 브라우저 렌더링 필요, 큰 단위의 테스트
  - 유지보수 비용

그래서 **꼭 필요한 곳에만** e2e 테스트를 작성해야 한다.

### cypress

- 유료 플랜이 존재...
- 여러 개의 테스트를 병렬테스트하려면 cypress 유료 플랜을 구매해야 한다.
- `sorry-cypress` 라는 라이브러리를 사용하면 우회할 수 도 있다.

### 로그인 시나리오 테스트

- 유저의 로그인 시나리오를 테스트한다.
- 유저 행동을 기준으로 테스트를 작성한다.

### STEP1. 페이지 방문

```js
describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});
```

### STEP2. 요소 찾기

```js
describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });
});
```

### STEP3. 명령추가

```js
describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });
});
```

### STEP4: 확인하기

```js
describe("My First Test", () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });
});
```

### testing library API를 사용하기

- https://testing-library.com/docs/cypress-testing-library/intro/
