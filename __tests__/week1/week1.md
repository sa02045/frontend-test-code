# 단위 테스트 기본

## 단위 테스트란?

단위 테스트는 테스트 종류 중 가장 낮은 단계의 테스트로 다음 속성을 가진다.

- 가장 작은 코드 단위를 검증한다.(일반적으로 함수, 클래스 단위)
- 빠르게 검증한다.

### 단위 테스트의 장점

- 테스트 비용이 매우 저렴하다!
- 최소 유지비로 최대 가치를 얻을 수 있다.

</br>

## 단위 테스트 API 살펴보기

### 기본 테스트 API - describe, test, expect

기본적인 API로 작성된 테스트 코드를 살펴보자

1. `test`

```js
test(name, fn);
- name: 테스트 이름
- fn: 테스트 코드


test("두 인자를 받아 합을 반환한다", () => {});
```

2. `expect`

```js
expect(value)
  - value: 예상값

test("두 인자를 받아 합을 반환한다", () => {
  expect(sum(1, 2)).toBe(3);
});
```

3. `describe`는 연관된 테스트를 묶는 그룹을 만든다.

```ts
describe(name, fn);
  - name: 그룹 이름
  - fn: 그룹 내부에 포함될 테스트 코드

describe("sum 함수", () => {});
describe("minus 함수", () => {});
```

- describe는 있어도 되고 없어도 된다.
- describe는 중첩해서 사용할 수 있다.

</br>

# Given, When, Then 패턴

테스트 코드를 작성할 때, 테스트의 목적을 명확하게 드러내기 위해 사용하는 패턴이다.

세 단계로 나누어 테스트를 작성한다.

- Given: 준비
  - 테스트에 사용되는 변수, 입력값, 객체 등을 선언하고 준비한다.
- When: 실행
  - 테스트할 함수나 메서드를 실행한다.
- Then: 검증
  - 예상값과 실제값을 비교하여 검증한다.

```js
describe("sum 함수", () => {
  test("두 인자를 받아 합을 반환한다", () => {
    // Given
    const a = 1;
    const b = 2;

    // When
    const result = sum(a, b);

    // Then
    expect(result).toBe(3);
  });
});
```

</br>

### Given, When, Then 패턴을 사용하여 테스트 코드 작성해보자1

요구사항 (product 함수)

> 두 인자를 받아 곱을 반환하는 product 함수와 테스트코드를 작성하시오.

</br>

### Given, When, Then 패턴을 사용하여 테스트 코드 작성해보자2

요구사항

> 밤 11시 ~ 11시 30분 사이는 금융사의 점검시간이다. 현재시간이 금융점검시간이면 true, 아니면 false를 반환하는 함수 isBankingTime와 테스트 코드를 작성하시오.

</br>

# 테스트 더블