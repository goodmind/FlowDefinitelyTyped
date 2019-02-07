declare module "enzyme-adapter-react-15.4" {
  import type { EnzymeAdapter } from "enzyme";

  declare class ReactFifteenFourAdapter mixins EnzymeAdapter {}

  declare module.exports: typeof ReactFifteenFourAdapter;
}
