# 스냅샷 테스트 - 이전 시점의 결과와 현재 시점의 결과를 비교하자

스냅샷 테스트는 스냅샷 테스트 결과를 `저장`하고 이전 시점과 현재 시점을 비교한다.
이미지, 함수, 컴포넌트, HTML 등 `직렬화`할 수 있는 모든 데이터를 스냅샷 테스트할 수 있다.

## 스냅샷 결과 파일

1. 스냅샷 파일은 스냅샷 결과값이 직렬화되어 텍스트 파일로 저장된다. 이렇게 저장된 파일은 이후 스냅샷 테스트에서 변경되었는지 diff 알고리즘으로 비교된다.
2. 스냅샷 결과 파일은 함께 커밋되어야 한다. 스냅샷 테스트로 생성된 스냅샷 파일은 테스트의 일부로 간주해야하고 테스트 코드와 함께 커밋되어 관리해야한다.

## vitest의 스냅샷 API

vitest는 다음 스냅샷 테스트 API를 제공한다.

- toMatchSnapshot
  - 이전 스냅샷 파일이 없으면 스냅샷 파일을 생성한다.
  - 스냅샷 파일이 있다면 이전 스냅샷 파일과 현재 스냅샷 결과를 비교한다.
- toMatchInlineSnapshot
  - 파일을 생성하지않고 메모리(인라인)으로 스냅샷 결과를 저장한다.

추가로 `이미지 파일` 스냅샷 테스트를 하려면 추가적인 라이브러리(`jest-image-snapshot`)가 필요하다

## 컴포넌트 스냅샷 테스트 - DOM 스냅샷 테스트

`react-test-renderer` 라이브러리는 리액트 컴포넌트를 DOM 트리와 유사한 값을 렌더링해주는 라이브러리이다.

- 진짜 DOM은 브라우저에서 생성된다.
- 서버사이드에서는 진짜 DOM을 생성할 수 없으니 마치 진짜 DOM을 생성한 것처럼 가짜 DOM을 생성해주는 라이브러리이다.
- 리액트 컴포넌트가 브라우저에서 어떻게 DOM Tree를 렌더링될지 테스트하려면 실제 브라우저 DOM을 사용하거나 또는 jsdom을 사용해야하지만
- `react-test-renderer` 라이브러리를 사용하면 리액트 컴포넌트의 DOM 트리의 스냅샷을 테스트할 수 있다.

**Link 컴포넌트 스냅샷 테스트**

```js
const component = renderer.create(
  <Link page="http://www.facebook.com">Facebook</Link>
);

let tree = component.toJSON();
expect(tree).toMatchSnapshot();

// 스냅샷 파일에 저장된 스냅샷 결과

exports[`changes the class when hovered 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;
```

- toJSON, toTree API를 사용하면 리액트 컴포넌트의 DOM 트리결과물과 렌더링결과물을 확인할 수 있다.
- 실제 DOM이나 DOM 구현체인 jsdom을 사용하는 것이 아니라는 것을 기억하자

### 문제점

- 이러한 테스트 방법이 신뢰를 줄수 있을까? 스냅샷에 대한 정보를 보고 테스트에 대한 예측을 하기가 어렵다
- 이러한 테스트는 `구현 상세`를 테스트하는 것이라고 할 수 있다.

# 스냅샷 테스트로 시각적 테스팅하기

스냅샷 테스트는 UI 변경사항을 확인하는데 사용할 수 있다.

- UI 컴포넌트를 렌더링하고 스냅샷을 찍는다. 이미 저정된 스냅샷 파일과 비교한다. 만약 일치하지 않는다면 테스트는 실패한다.
  - 실패원인은 다음과 같다. 만약 의도한 변경이라면 새로운 스냅샷 버전으로 업데이트되야한다.
  1. 예상밖의 변경으로 인한 스냅샷 결과의 변경
  2. 의도한 변경으로 인한 스냅샷 결과의 변경

## 이미지 파일 스냅샷 테스트하기

이미지 파일에 대한 스냅샷 테스트를 해보자. 기존에 존재하는 이미지가 의도하지않게 만약 다른 이미지로 수정되었다면 테스트는 실패하게 된다.

1. node.js readFileSync로 이미지 파일을 불러온다음 `jest-image-snapshot`의 `toMatchImageSnapshot`를 사용한다.
2. `__image__snapshots__` 폴더에 스냅샷 테스트 결과가 저장된다.
3. 원본 이미지 파일을 변경해보자
4. 이전 시점의 스냅샷 결과와 변경한 이미지 파일의 스냅샷 결과를 비교하면 테스트가 실패한다.
5. 실패하면 `__diff_output__` 폴더에 이전 시점의 스냅샷 결과와 변경한 이미지 파일의 스냅샷 결과를 비교한 결과가 저장된다.

```js
describe("image snapshot test", () => {
  it("image snapshot", () => {
    expect(
      readFileSync(`${dirname(__filename)}/input-image.png`)
    ).**toMatchImageSnapshot**();
  });
});
```
