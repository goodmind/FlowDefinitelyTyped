declare module "assert-equal-jsx" {
  import typeof * as React from "react";

  declare interface assertEqualJSX$AsssertOptions {
    sanitize?: (str: string) => string;
  }
  declare function assertEqualJSX(
    actual: React$Node,
    expected: React$Node,
    opts?: assertEqualJSX$AsssertOptions
  ): void;

  declare export default typeof assertEqualJSX;
}
