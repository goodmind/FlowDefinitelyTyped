declare module "global" {
  declare class DynamicTimeWarping<T> {
    constructor(
      ser1: $ReadOnlyArray<T>,
      ser2: $ReadOnlyArray<T>,
      distFunc: (a: T, b: T) => number
    ): this;
    getDistance(): number;
    getPath(): Array<[number, number]>;
  }
}
declare module "dynamic-time-warping" {
  declare export default typeof DynamicTimeWarping;
}
