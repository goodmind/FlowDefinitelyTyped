declare module "stream-meter" {
  import type { Transform } from "stream";

  declare function m(maxBytes?: number): m$m$StreamMeter;

  declare export type m$StreamMeter = {
    constructor(maxBytes?: number): m$StreamMeter,
    bytes: number,
    maxBytes: number
  } & Transform;

  declare module.exports: typeof m;
}
