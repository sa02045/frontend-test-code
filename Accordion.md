# Chakra-ui Accordion 컴포넌트 테스트 분석

https://github.com/chakra-ui/chakra-ui/blob/170198fc3936ad34f8136a2da173c12d9dc3dc36/packages/components/accordion/tests/accordion.test.tsx#L183

### 분석 요약 정리

1. chakra-ui는 자체적인 테스트 라이브러리 사용한다 - (testing-library를 fork하거나 wrapping한듯)
2. `합성 컴포넌트`는 각각의 컴포넌트를 테스트하지 않고 합성된 컴포넌트를 테스트한다
3. 구현세부사항을 테스트하지 않고, 사용자 관점에서 테스트한다 (attribute는 구현세부사항이 아니다.)
4. focus, toHaveFocus등 이런 API가 있다
5. 디자인 시스템, UI 라이브러리 컴포넌트는 `접근성` 테스트가 필수인듯 (aria, role, tabIndex 등등)

## 합성 컴포넌트 테스트

- Accordion 컴포넌트는 합성 컴포넌트로 이루어져있다
- 여러 컴포넌트들이 모여 하나의 컴포넌트를 구성하는 경우
- 각각의 컴포넌트를 테스트하지 않고 합성된 컴포넌트를 테스트한다

```js
<Accordion>
    <AccordionItem>
        <h2>
            <AccordionButton>Section 1 title</AccordionButton>
        </h2>
        <AccordionPanel>Panel 1</AccordionPanel>
    </AccordionItem>
</Accordion>,
```

## 접근성

- aria-expanded: 스크린 리더가 accordion open-close 여부를 읽음
- keyboard, focus 테스트

## 구현 세부사항

- 구현 세부 사항은 사용자가 보거나 이해하지 못하는 사항

### 사용자

- 렌더링된 화면을 보는 사용자 (end user)
- API를 사용하는 개발자 (component user)

1. end user 입장에서는 "화면에 보이는 것"이 중요하다.

- `attribute`는 화면에 렌더링되는 결과물을 표시한 것. 따라서 `attribute`는 end user 입장에서 중요하다. (class도?)
- 유저 이벤트 (click, keyboard, focus등)은 end user 입장에서 중요하다.

2. component user 입장에서는 "API"가 중요하다.

- API 내부의 상태이름, 상태값, 구현 세부사항은 component user 입장에서는 중요하지 않다

### 테스트해야하는 것

- 렌더링화면이 올바른지 (end user입장)
- API가 올바른지 (component user입장)
  - props가 제대로 전달되는지
  - 이벤트 핸들러가 제대로 동작하는지 (ex. vi.fn 이용한 테스트등)
