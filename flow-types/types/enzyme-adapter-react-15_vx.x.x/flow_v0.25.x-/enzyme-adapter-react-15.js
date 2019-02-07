declare module "enzyme-adapter-react-15" {
  import type { EnzymeAdapter } from "enzyme";

  declare class ReactFifteenAdapter mixins EnzymeAdapter {}

  declare module.exports: typeof ReactFifteenAdapter;
}
