// import { describe, it, expect } from "vitest";
// import { toMatchImageSnapshot } from "jest-image-snapshot";
// import { readFileSync } from "node:fs";
// import { dirname } from "path";

// declare module "vitest" {
//   interface Assertion<T> {
//     toMatchImageSnapshot(): T;
//   }
// }
// expect.extend({ toMatchImageSnapshot });

// // 1번함수 - 수정 전
// function toUpperCase(str: string) {
//   return str.toUpperCase();
// }

// // 2번 함수 - 수정 후
// // function toUpperCase(str: string) {
// //   return str.toLowerCase();
// // }

// describe("snapshot test", () => {
//   it("toUpperCase String", () => {
//     // 수정 전, 수정 후 함수를 바꿔가며 테스트를 해보자.

//     // 먼저 수정 전 1번함수로 스냅샷 테스트를 하면 스냅샷 파일이이 저장된다.
//     // 어떠한 값으로 저장되는지 살펴보자
//     const result = toUpperCase("foobar");
//     expect(result).toMatchSnapshot();

//     // 시간이 흘러 누군가가 함수를 수정했다고 해보자

//     // 수정 전 함수 대신 수정 후 함수인 2번 함수로 스냅샷 테스트를 해보자

//     // 스냅샷의 값은 `"foobar"`이다. 이전의 스냅샷 값인 `"FOOBAR"`와 다르다.
//     // 저장된 스냅샷 값과 비교할 스냅샷 값이 다르기 때문에 테스트가 실패한다.

//     // const result = toUpperCase("foobar");
//     // expect(result).toMatchSnapshot();
//   });

//   it("inline snapshot", () => {
//     const result = toUpperCase("foobar");

//     // 스냅샷을 인라인으로 저장할 수 있다. 파일은 생성되지않는다.
//     // 스냅샷의 값은 `"FOOBAR"`이다.
//     expect(result).toMatchInlineSnapshot('"FOOBAR"');

//     // 인라인 저장된 스냅샷값 `"FOOBAR"`와 비교할 스냅샷 '"foobar"'값이 다르기 때문에 테스트가 실패한다.
//     // expect(result).toMatchInlineSnapshot('"foobar"');
//   });
// });

// // 이미지 스냅샷 테스트
// // 이미지가 바뀌었는지 확인할 때 스냅샷을 테스트할 수 있다.

// describe("image snapshot test", () => {
//   it("image snapshot", () => {
//     // __image_snapshots__ 폴더에 스냅샷 파일이 저장된다.
//     expect(
//       readFileSync(`${dirname(__filename)}/input-image.png`)
//     ).toMatchImageSnapshot();

//     // input-image 파일이름은 유지하고 다른 이미지로 교체해보자
//     // 다른 이미지이기 때문에 스냅샷 테스트는 실패한다.
//     // __diff_output__ 폴더에 원래 스냅샷 파일과 수정한 스냅샷 파일이 어떻게 다른지 비교한 이미지가 저장된다.
//   });
// });
