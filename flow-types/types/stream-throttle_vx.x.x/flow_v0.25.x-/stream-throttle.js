declare module "stream-throttle" {
  import type { Transform } from "stream";

  declare export interface ThrottleOptions {
    +rate: number;
    +chunksize?: number;
  }
  declare export class Throttle mixins Transform {
    constructor(options: ThrottleOptions): this;
  }
  declare export class ThrottleGroup {
    constructor(options: ThrottleOptions): this;
    throttle(options: ThrottleOptions): Throttle;
  }
}
