## 송금 컴포넌트 (Transfer Component)

UI 예시
<img src="https://blog.kakaopay.com/_astro/blog_img_01.0fe64fbf_W8OSl.png" width="500"/>

### 요구사항

1. 사용자는 송금할 금액을 입력할 수 있어요

2. 입력값은 숫자만 입력할 수 있어요

   - 문자는 입력할 수 없어요
   - 천 단위로 "콤마(,)"를 넣어주세요
     - ex. 2,000,000
   - `Intl.NumberFormat`를 사용하세요

3. 잔액보다 많은 금액을 입력할 수 없어요
   - 잔액보다 많은 금액을 입력하면 잔액만큼만 입력되요
   - ex. 잔액이 100,000원인데 200,000원을 입력하면 100,000원만 입력되요

**_Component Props_**

```js
interface Props {
  name: string; // 이름
  balance: number; // 잔액
}
```

## input 태그에 접근하는 방법

1. data-testid를 이용한다.

- https://testing-library.com/docs/queries/bytestid/

  ```html
  <input data-testid="money-input" />
  ```

  ```tsx
  const moneyInput = screen.getByTestId("money-input");
  ```

2. role을 이용한다.

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

  ```html
  <input role="money-input" />
  ```

  ```tsx
  const moneyInput = screen.getByRole("money-input");
  ```

3. aria-label을 이용한다.

- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label

  ```html
  <input aria-label="money-input" />
  ```

  ```tsx
  const moneyInput = screen.getByLabelText("money-input");
  ```

4. getByLabelText를 이용한다.

```html
<label htmlFor="transfer">송금금액 입력</label>

<input id="transfer" />
```

## Input 입력을 테스트 하는 방법

1. userEvent.type을 이용한다.

```js
const input = screen.getByLabelText("송금") as HTMLInputElement;
await userEvent.type(input, "안녕하세요");

// https://github.com/elastic/kibana/pull/170533
// userEvent.type는 문제가 있어요. 긴 문자열에 대해서 이슈가 있어요
// 대신 fireEvent.change를 사용해요
```

```js
const input = screen.getByLabelText("송금") as HTMLInputElement;
fireEvent.change(input, { target: { value: "12311113" } });
```
