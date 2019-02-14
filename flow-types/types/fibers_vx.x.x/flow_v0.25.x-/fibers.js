declare module "fibers" {
  declare function fibers(callback: () => void): fibers$Fiber;

  declare var npm$namespace$fibers: {
    yield: typeof fibers$yield,
    poolSize: typeof fibers$poolSize,
    fibersCreated: typeof fibers$fibersCreated,
    current: typeof fibers$current
  };
  declare export var fibers$poolSize: number;

  declare export var fibers$fibersCreated: number;

  declare export var fibers$current: fibers$Fiber;

  declare export function fibers$yield(value?: any): any;

  declare export interface fibers$Fiber {
    run(value?: any): any;
  }
  declare export default typeof fibers;
}
