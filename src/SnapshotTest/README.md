# 스냅샷 테스트 - 이전 시점의 결과와 현재 시점의 결과를 비교하자

스냅샷 테스트는 결과를 스냅샷 테스트 결과를 `저장`하고 이전 시점과 현재 시점을 비교한다.
이미지, 함수, 컴포넌트, HTML 등의 다양한 결과를 스냅샷 테스트를 통해 비교할 수 있다.

## 스냅샷 API

vitest는 다음 스냅샷 테스트 API를 제공한다.

- toMatchSnapshot
- toMatchInlineSnapshot

이미지 파일 스냅샷 테스트를 하려면 추가적인 라이브러리(`jest-image-snapshot`)가 필요하다

- toMatchImageSnapshot

## 이미지 파일 스냅샷 테스트하기

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
    ).toMatchImageSnapshot();
  });
});
```

## 컴포넌트 스냅샷 테스트하기
