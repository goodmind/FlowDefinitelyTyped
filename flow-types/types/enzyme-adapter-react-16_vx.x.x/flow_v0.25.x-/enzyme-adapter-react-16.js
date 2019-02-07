declare module "enzyme-adapter-react-16" {
  import type { EnzymeAdapter } from "enzyme";

  declare class ReactSixteenAdapter mixins EnzymeAdapter {}

  declare module.exports: typeof ReactSixteenAdapter;
}
