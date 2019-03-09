declare module "enzyme" {
  declare interface UntilOptions {
    maxDepth: number;
  }
  declare interface ShallowWrapper<P = {}> {
    renderProp(propName: string, ...args: any[]): ShallowWrapper<P>;
    drill(expander: (props: any) => ShallowWrapper<>): ShallowWrapper<P>;
    until(selector: EnzymeSelector, options?: UntilOptions): ShallowWrapper<P>;
  }
}
declare module "@commercetools/enzyme-extensions" {
  import typeof * as enzyme from "enzyme";

  declare function monkeyPatchShallowWrapper(
    s: typeof enzyme.ShallowWrapper
  ): void;

  declare export default typeof monkeyPatchShallowWrapper;
}
