declare module "jasmine-matchers" {
  declare interface jasmine$Matchers<T> {
    toBeArray(): boolean;
    toBeCloseToOneOf(
      values: any[],
      isCloseToFunction: (actual: number, expected: number) => boolean
    ): boolean;
    toBeInstanceOf(Constructor: Function): boolean;
    toBeInRange(min: number, max: number): boolean;
    toBeNan(): boolean;
    toBeNumber(): boolean;
    toBeOfType(type: string): boolean;
    toBeOneOf(values: any[]): boolean;
    toContainOnce(value: any): boolean;
    toHaveBeenCalledXTimes(count: number): boolean;
    toHaveLength(length: number): boolean;
    toHaveOwnProperties(...names: string[]): boolean;
    toHaveOwnPropertiesWithValues(obj: Object): boolean;
    toHaveProperties(...names: string[]): boolean;
    toHavePropertiesWithValues(obj: Object): boolean;
    toExactlyHaveProperties(...names: string[]): boolean;
    toStartWith(value: any): boolean;
    toStartWith(value: any[]): boolean;
    toEndWith(value: any): boolean;
    toEndWith(values: any[]): boolean;
    toEachStartWith(searchString: string): boolean;
    toSomeStartWith(searchString: string): boolean;
    toEachEndWith(searchString: string): boolean;
    toSomeEndWith(searchString: string): boolean;
    toStartWithEither(...searchString: any[]): boolean;
    toThrowInstanceOf(klass: Function): boolean;
    toThrowStartsWith(text: string): boolean;
  }
}
