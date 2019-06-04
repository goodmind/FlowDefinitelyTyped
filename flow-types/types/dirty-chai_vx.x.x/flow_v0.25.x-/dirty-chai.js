declare module "global" {
  declare interface Chai$LanguageChains {
    always: global$Chai$Assertion;
  }

  declare interface Chai$Assertion {
    (message?: string): global$Chai$Assertion;
    ensure: global$Chai$Assertion;
  }

  declare type Chai$PromisedAssertion = {
    (message?: string): global$Chai$Assertion,
    ensure: global$Chai$Assertion
  } & Eventually &
    PromiseLike<any>;
}
declare module "dirty-chai" {
  declare function dirtyChai(chai: any, utils: any): void;

  declare export default typeof dirtyChai;
}
