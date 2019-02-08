declare interface jasmine$Matchers<T> {
  toBePresent(): boolean;
  toBeDisplayed(): boolean;
  toHaveCountOf(expectedCount: number): boolean;
  toHaveText(expectedText: string): boolean;
  toMatchRegex(regex: RegExp): boolean;
  toMatchMoney(expectedValue: number, currencySymbol?: string): boolean;
  toMatchMoneyWithFraction(
    expectedValue: number,
    currencySymbol?: string
  ): boolean;
  toHaveValue(actual: string | number): boolean;
  toHaveClass(className: string): boolean;
  toHaveUrl(url: string): boolean;
  toBeDisabled(): boolean;
  toBeChecked(): boolean;
  toBeValid(): boolean;
  toBeInvalid(): boolean;
  toBeInvalidRequired(): boolean;
  toMatchTranslated(translationId: string, interpolateParams?: any): boolean;
  toMatchTranslated(translationId: string[], interpolateParams?: any): boolean;
}
declare interface protractor$IProtractorLocatorStrategy {
  dataHook(
    hook: string,
    optParentElement?: protractor$protractor$ElementFinder,
    optRootSelector?: string
  ): webdriver.Locator;
  dataHookAll(
    hook: string,
    optParentElement?: protractor$protractor$ElementFinder,
    optRootSelector?: string
  ): webdriver.Locator;
}

declare interface protractor$ElementArrayFinder {
  getByText(text: string): protractor$protractor$ElementFinder;
  $$data(hook: string): protractor$protractor$ElementArrayFinder;
}

declare interface protractor$ElementFinder {
  $data(hook: string): protractor$protractor$ElementFinder;
}
declare module "global" {
  declare function $data(hook: string): protractor$protractor$ElementFinder;

  declare function $$data(
    hook: string
  ): protractor$protractor$ElementArrayFinder;
}
declare module "protractor-helpers" {
  import typeof * as webdriver from "selenium-webdriver";

  declare export function not(
    arg: webdriver.promise.IThenable<any>
  ): webdriver.promise.IThenable<boolean>;

  declare export function translate(
    translationId: string,
    interpolateParams?: any
  ): webdriver.promise.IThenable<string>;

  declare export function translate(
    translationId: string[],
    interpolateParams?: any
  ): webdriver.promise.IThenable<{
    [key: string]: string
  }>;

  declare export function safeGet(url: string): void;

  declare export function maximizeWindow(width?: number, height?: number): void;

  declare export function resetPosition(): void;

  declare export function moveToElement(hook: string): void;

  declare export function displayHover(
    element: protractor$protractor$ElementFinder
  ): void;

  declare export function waitForElement(
    element: protractor$protractor$ElementFinder,
    timeout?: number
  ): void;

  declare export function waitForElementToDisappear(
    element: protractor$protractor$ElementFinder,
    timeout?: number
  ): void;

  declare export function selectOptionByText(
    select: protractor$protractor$ElementFinder,
    text: string
  ): void;

  declare export function selectOptionByIndex(
    select: protractor$protractor$ElementFinder,
    index: number
  ): void;

  declare export function selectOption(
    option: protractor$protractor$ElementFinder
  ): void;

  declare export function isFirefox(): boolean;

  declare export function isIE(): boolean;

  declare export function createMessage(
    actual: string,
    message: string,
    isNot: any
  ): string;

  declare export function createMessage(
    actual: protractor$protractor$ElementFinder,
    message: string,
    isNot: any
  ): string;

  declare export function createMessage(
    actual: protractor$protractor$ElementArrayFinder,
    message: string,
    isNot: any
  ): string;

  declare export function clearAndSetValue(
    input: protractor$protractor$ElementFinder,
    value: string
  ): void;

  declare export function hasClass(
    element: protractor$protractor$ElementFinder,
    className: string
  ): webdriver.promise.IThenable<boolean>;

  declare export function hasValue(
    element: protractor$protractor$ElementFinder,
    expectedValue: string
  ): webdriver.promise.IThenable<boolean>;

  declare export function hasValue(
    element: protractor$protractor$ElementFinder,
    expectedValue: number
  ): webdriver.promise.IThenable<boolean>;

  declare export function hasLink(
    element: protractor$protractor$ElementFinder,
    url: string
  ): webdriver.promise.IThenable<boolean>;

  declare export function isDisabled(
    element: protractor$protractor$ElementFinder
  ): webdriver.promise.IThenable<boolean>;

  declare export function isChecked(
    element: protractor$protractor$ElementFinder
  ): webdriver.promise.IThenable<boolean>;

  declare export function getFilteredConsoleErrors(): webdriver.promise.IThenable<
    string[]
  >;
}
