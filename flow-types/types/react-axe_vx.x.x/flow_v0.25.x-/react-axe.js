declare module "react-axe" {
  import typeof * as React from "react";

  import typeof * as ReactDOM from "react-dom";

  import type { Spec } from "axe-core";

  declare export default typeof axe;

  declare function axe(
    react: typeof React,
    reactDOM: typeof ReactDOM,
    timeout: number,
    config?: axe$ReactAxeConfig
  ): void;

  declare type axe$ReactAxeConfig = Spec;
}
