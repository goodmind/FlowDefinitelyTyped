declare module "global" {
  declare interface jasmine$Matchers<T> {
    toBeChecked(): boolean;
    toBeDisabled(): boolean;
    toBeEmpty(): boolean;
    toBePresent(): boolean;
    toContainReact(reactInstance: React$Node): boolean;
    toHaveClassName(className: string): boolean;
    toHaveHTML(html: string): boolean;
    toHaveProp(propKey: string, propValue?: any): boolean;
    toHaveRef(refName: string): string;
    toHaveState(stateKey: string, stateValue?: any): boolean;
    toHaveStyle(styleKey: string, styleValue?: any): boolean;
    toHaveTagName(tagName: string): boolean;
    toHaveText(text?: string): boolean;
    toIncludeText(text: string): boolean;
    toHaveValue(value: any): boolean;
    toMatchElement(reactInstance: React$Node): boolean;
    toMatchSelector(selector: string): boolean;
  }
}
declare module "jasmine-enzyme" {
  declare function jasmineEnzyme(): void;

  declare export default typeof jasmineEnzyme;
}
