import renderer from "react-test-renderer";
import Link from "./Link";
import { it, expect } from "vitest";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {});

  tree = component.toTree();
  expect(tree).toMatchSnapshot();
});
