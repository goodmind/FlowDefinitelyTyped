declare module "angular-scenario" {
  declare export interface ng$IAngularStatic {
    scenario: any;
  }
  declare export interface angularScenario$RunFunction {
    (functionToRun: any): any;
  }

  declare export interface angularScenario$RunFunctionWithDescription {
    (description: string, functionToRun: any): any;
  }

  declare export interface angularScenario$PauseFunction {
    (): any;
  }

  declare export interface angularScenario$SleepFunction {
    (seconds: number): any;
  }

  declare export interface angularScenario$Future {}

  declare export interface angularScenario$testWindow {
    href(): angularScenario$Future;
    path(): angularScenario$Future;
    search(): angularScenario$Future;
    hash(): angularScenario$Future;
  }

  declare export interface angularScenario$testLocation {
    url(): angularScenario$Future;
    path(): angularScenario$Future;
    search(): angularScenario$Future;
    hash(): angularScenario$Future;
  }

  declare export interface angularScenario$Browser {
    navigateTo(url: string): void;
    navigateTo(urlDescription: string, urlFunction: () => string): void;
    reload(): void;
    window(): angularScenario$testWindow;
    location(): angularScenario$testLocation;
  }

  declare export interface angularScenario$Matchers {
    toEqual(value: any): void;
    toBe(value: any): void;
    toBeDefined(): void;
    toBeTruthy(): void;
    toBeFalsy(): void;
    toMatch(regularExpression: any): void;
    toBeNull(): void;
    toContain(value: any): void;
    toBeLessThan(value: any): void;
    toBeGreaterThan(value: any): void;
  }

  declare export type angularScenario$CustomMatchers = {} & angularScenario$Matchers;

  declare export type angularScenario$Expect = {
    not(): angularScenario$angularScenario$CustomMatchers
  } & angularScenario$CustomMatchers;

  declare export interface angularScenario$UsingFunction {
    (selector: string, selectorDescription?: string): void;
  }

  declare export interface angularScenario$BindingFunction {
    (bracketBindingExpression: string): angularScenario$Future;
  }

  declare export interface angularScenario$Input {
    enter(value: any): any;
    check(): any;
    select(radioButtonValue: any): any;
    val(): angularScenario$Future;
  }

  declare export interface angularScenario$Repeater {
    count(): angularScenario$Future;
    row(index: number): angularScenario$Future;
    column(ngBindingExpression: string): angularScenario$Future;
  }

  declare export interface angularScenario$Select {
    option(value: any): any;
    option(...listOfValues: any[]): any;
  }

  declare export interface angularScenario$Element {
    count(): angularScenario$Future;
    click(): any;
    dblclick(): any;
    mouseover(): any;
    mousedown(): any;
    mouseup(): any;
    query(
      callback: (
        selectedDOMElements: JQuery,
        callbackWhenDone: (objNull: any, futureValue: any) => any
      ) => any
    ): any;
    val(): angularScenario$Future;
    text(): angularScenario$Future;
    html(): angularScenario$Future;
    height(): angularScenario$Future;
    innerHeight(): angularScenario$Future;
    outerHeight(): angularScenario$Future;
    width(): angularScenario$Future;
    innerWidth(): angularScenario$Future;
    outerWidth(): angularScenario$Future;
    position(): angularScenario$Future;
    scrollLeft(): angularScenario$Future;
    scrollTop(): angularScenario$Future;
    offset(): angularScenario$Future;
    val(value: any): void;
    text(value: any): void;
    html(value: any): void;
    height(value: any): void;
    innerHeight(value: any): void;
    outerHeight(value: any): void;
    width(value: any): void;
    innerWidth(value: any): void;
    outerWidth(value: any): void;
    position(value: any): void;
    scrollLeft(value: any): void;
    scrollTop(value: any): void;
    offset(value: any): void;
    attr(key: any): angularScenario$Future;
    prop(key: any): angularScenario$Future;
    css(key: any): angularScenario$Future;
    attr(key: any, value: any): void;
    prop(key: any, value: any): void;
    css(key: any, value: any): void;
  }
  declare var describe: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var ddescribe: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var xdescribe: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var beforeEach: angularScenario$angularScenario$RunFunction;
  declare var afterEach: angularScenario$angularScenario$RunFunction;
  declare var it: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var iit: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var xit: angularScenario$angularScenario$RunFunctionWithDescription;
  declare var pause: angularScenario$angularScenario$PauseFunction;
  declare var sleep: angularScenario$angularScenario$SleepFunction;
  declare function browser(): angularScenario$angularScenario$Browser;

  declare function expect(
    expectation: angularScenario$angularScenario$Future
  ): angularScenario$angularScenario$Expect;

  declare var using: angularScenario$angularScenario$UsingFunction;
  declare var binding: angularScenario$angularScenario$BindingFunction;
  declare function input(
    ngModelBinding: string
  ): angularScenario$angularScenario$Input;

  declare function repeater(
    selector: string,
    repeaterDescription?: string
  ): angularScenario$angularScenario$Repeater;

  declare function select(
    ngModelBinding: string
  ): angularScenario$angularScenario$Select;

  declare function element(
    selector: string,
    elementDescription?: string
  ): angularScenario$angularScenario$Element;

  declare var angular: ng$ng$IAngularStatic;
}
